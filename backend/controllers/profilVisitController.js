import profilVisite from "../models/profilVisite.js";

const createProfileVisit = async (req, res) => {
    try {
        const { visiteurId, profilVisiteId } = req.body;

        if (!visiteurId || !profilVisiteId) {
            return res.status(400).json({ message: "Les identifiants du visiteur et du profil sont requis" });
        }

        await profilVisite.findOrCreate({
            where: { visiteurId, profilVisiteId },
            defaults: { visiteurId, profilVisiteId },
        });
        return res.status(201).json({ message: "Visite enregistrée" });
    } catch (error) {
        return res.status(500).json({
            message: "Erreur serveur",
            error: error.message
        });
    }
};

// recuperer le nombre de visites pour un profil spécifique
const getNumberOfVisitsProfil=async(req,res)=>{
    try{
        const { utilisateurId } = req.params;
        const visite=await profilVisite.count({
            where:{
                profilVisiteId:utilisateurId
            },
            distinct: true,
            col: "visiteurId",
        });
        return res.status(200).json({ visits: visite });
    } catch (error) {
        return res.status(500).json({
            message: "Erreur serveur",
            error: error.message
        });
    }
}
export { createProfileVisit, getNumberOfVisitsProfil };