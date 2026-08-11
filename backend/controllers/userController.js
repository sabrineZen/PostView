import Utilisateur from "../models/Utilisateur.js";
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
    return res.status(200).json({ userName: user.nom });
}
//recuperer tout les utilisateurs

const getAllUsers=async (req,res)=>{
    const{ id}=req.params;
    const users=await Utilisateur.findAll();
    return res.status(200).json({ users });
}
export { getNumberOfUsers, getUserNameById, getAllUsers };;