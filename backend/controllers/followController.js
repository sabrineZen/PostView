import Follow from "../models/follow.js";
//fonction pour suivre un utilisateur 
const followUser=async (req,res)=>{
    try{
        const {followerId,followingId}=req.body;
        if(!followerId || !followingId){
            return res.status(400).json({message:"Les identifiants du follower et du following sont requis"});
        }
        if (Number(followerId) === Number(followingId)) {
            return res.status(400).json({ message: "Vous ne pouvez pas vous suivre vous-même" });
        }

        const [follow, created] = await Follow.findOrCreate({
            where: { followerId, followingId },
            defaults: { followerId, followingId },
        });

        return res.status(created ? 201 : 200).json({
            message: created ? "Utilisateur suivi" : "Utilisateur déjà suivi",
            follow,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Erreur lors du suivi de l'utilisateur"});
    }
}
const unfollowUser=async (req,res)=>{
    try {
        const { followerId, followingId } = req.body;
        if (!followerId || !followingId) {
            return res.status(400).json({ message: "Les identifiants du follower et du following sont requis" });
        }

        await Follow.destroy({ where: { followerId, followingId } });
        return res.status(200).json({ message: "Utilisateur non suivi" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur lors du non-suivi de l'utilisateur" });
    }
};

//foction pour recuperer le nombre de followers d'un utilisateur
const getNumberOfFollowers=async (req,res)=>{
    try{ 
        const {userId}=req.params;
        const followersCount=await Follow.count({
            where:{
                followingId:userId
            }
        });
        return res.status(200).json({ followersCount });
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Erreur lors de la récupération du nombre de followers"});
    }
}
//fonction pour recuperer le nombre de following d'un utilisateur
const getNumberOfFollowing=async (req,res)=>{
    try{
        const {userId}=req.params;
        const followingCount=await Follow.count({
            where:{
                followerId:userId
            }
        });
        return res.status(200).json({ followingCount });
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Erreur lors de la récupération du nombre de following"});
    }
}
const getFollowers = async (req, res) => {
    try {
        const followers = await Follow.findAll({ where: { followingId: req.params.userId } });
        return res.status(200).json({ followers });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la récupération des followers" });
    }
};

const getFollowing = async (req, res) => {
    try {
        const following = await Follow.findAll({ where: { followerId: req.params.userId } });
        return res.status(200).json({ following });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs suivis" });
    }
};

export {
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing,
    getNumberOfFollowers,
    getNumberOfFollowing,
};