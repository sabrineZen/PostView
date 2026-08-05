import Utilisateur from "../models/Utilisateur.js";
import bcrypt from "bcrypt";

const Register = async (req, res) => {
  try {

    //  Récupérer les données envoyées par le frontend
    const { nom, email, password } = req.body;
    //verifier pour les champs
    if(!nom||!email||!password){
        return res.status(400).json({
            message:"tout les champs sont obligatoires"
        })
    }
     const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!emailRegex.test(email)){
        return res.status(400).json({
            message:"l'email est invalide"
        })
     }
     if(password.length<6){
        return res.status(400).json({
            message:"le mot de passe doit contenir au moins 6 caracteres"
        })
     }
    //  Vérifier si l'utilisateur existe déjà
    const utilisateurExiste = await Utilisateur.findOne({
      where: { email }
    });

    if (utilisateurExiste) {
      return res.status(409).json({
        message: "Cet email est déjà utilisé"
      });
    }

    //  Hasher le mot de passe
    const motDePasseHash = await bcrypt.hash(password, 10);

    //  Créer l'utilisateur
    const utilisateur = await Utilisateur.create({
      nom,
      email,
      motDePasse: motDePasseHash
    });

    return res.status(201).json({
      message: "Inscription réussie",
      utilisateur: {
        id: utilisateur.id,
        nom: utilisateur.nom,
        email: utilisateur.email
      }
    });

  } catch (error) {

    return res.status(500).json({
      message: "Erreur serveur",
      error: error.message
    });

  }
};

export default Register;