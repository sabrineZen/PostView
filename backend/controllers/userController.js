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

export { getNumberOfUsers };;