import Utilisateur from "../models/utilisateur.js";
import { Op } from "sequelize";
//nombre utilisateur
const getNumberOfUsers = async (req, res) => {
    try{
        const numberOfUsers = await Utilisateur.count();
        return res.status(200).json({ numberOfUsers });
    } catch (error) {
        return res.status(500).json({
            message: "Erreur serveur",
            error: error.message,
        });
    }
};
//recuperer le nom de l'utilisateur
const getUserNameById=async (req,res)=>{
    const{ id}=req.params;
    const user=await Utilisateur.findByPk(id);
    if(!user){
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    return res.status(200).json({
      userName: user.nom,
      bio: user.bio,
      photoProfil: user.photoProfil,
    });
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, bio } = req.body;

    if (!nom || !nom.trim()) {
      return res.status(400).json({ message: "Le nom est obligatoire" });
    }

    const user = await Utilisateur.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    user.nom = nom.trim();
    user.bio = bio?.trim() || null;
    if (req.file) {
      user.photoProfil = req.file.filename;
    }
    await user.save();

    return res.status(200).json({
      message: "Profil mis à jour",
      utilisateur: {
        id: user.id,
        nom: user.nom,
        email: user.email,
        bio: user.bio,
        photoProfil: user.photoProfil,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Erreur lors de la mise à jour du profil", error: error.message });
  }
};
//recuperer tout les utilisateurs

const getAllUsers=async (req,res)=>{
    const{ id}=req.params;
    const users=await Utilisateur.findAll();
    return res.status(200).json({ users });
}
//rechercher les users par lettre 
const searchUsersByName = async (req, res) => {
  try {
    const { name } = req.query;

    const users = await Utilisateur.findAll({
      where: {
        nom: {
          [Op.iLike]: `%${name}%`
        }
      }
    });

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message
    });
  }
};
export { getNumberOfUsers, getUserNameById, getAllUsers, searchUsersByName, updateUser };