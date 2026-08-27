import Utilisateur from "../models/Utilisateur.js";
import bcrypt from "bcrypt";


// partie inscription

const Register = async (req, res) => {
  try {
    // Récupérer les données envoyées par le frontend
    const { nom, email, password } = req.body;

    // Vérifier que tous les champs sont remplis
    if (!nom || !email || !password) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires",
      });
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "L'email est invalide",
      });
    }

  
    if (password.length < 6) {
      return res.status(400).json({
        message: "Le mot de passe doit contenir au moins 6 caractères",
      });
    }

    // Vérifier si l'utilisateur existe déjà
    const utilisateurExiste = await Utilisateur.findOne({
      where: { email },
    });

    if (utilisateurExiste) {
      return res.status(409).json({
        message: "Cet email est déjà utilisé",
      });
    }

    // Hasher le mot de passe
    const motDePasseHash = await bcrypt.hash(password, 10);

    // Créer le nouvel utilisateur
    const utilisateur = await Utilisateur.create({
      nom,
      email,
      motDePasse: motDePasseHash,
    });

    return res.status(201).json({
      message: "Inscription réussie",
      utilisateur: {
        id: utilisateur.id,
        nom: utilisateur.nom,
        email: utilisateur.email,
      },
    });

  } catch (error) {
    return res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};


// partie connexion

const Login = async (req, res) => {
  try {
    // Récupérer les données
    const { email, password } = req.body;

    // Vérifier les champs
    if (!email || !password) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires",
      });
    }

    // Chercher l'utilisateur
    const utilisateur = await Utilisateur.findOne({
      where: { email },
    });

    // Vérifier que l'utilisateur existe
    if (!utilisateur) {
      return res.status(401).json({
        message: "Email ou mot de passe incorrect",
      });
    }

    // Vérifier le mot de passe
    const motDePasseValide = await bcrypt.compare(
      password,
      utilisateur.motDePasse
    );

    if (!motDePasseValide) {
      return res.status(401).json({
        message: "Email ou mot de passe incorrect",
      });
    }

    // Connexion réussie
    return res.status(200).json({
      message: "Connexion réussie",
      utilisateur: {
        id: utilisateur.id,
        nom: utilisateur.nom,
        email: utilisateur.email,
      },
    });

  } catch (error) {
    return res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};


export {
  Register,
  Login,
};