import Post from "../models/Post.js";

const createPost = async (req, res) => {
    try {
        const { utilisateurId, contenu } = req.body;
        const fallbackUserId = utilisateurId && !Number.isNaN(Number(utilisateurId))
            ? Number(utilisateurId)
            : 1;

        const post = await Post.create({
            contenu,
            image: req.file ? req.file.filename : null,
            utilisateurId: fallbackUserId,
        });

        res.status(201).json({ post });
    } catch (error) {
        return res.status(500).json({
            message: "Erreur serveur",
            error: error.message,
        });
    }
};
//recuperer tout les posts
const getAllPosts= async (req,res) =>{
    try{
        const Posts=await Post.findAll();
        res.status(200).json({Posts});
    }catch(error){
        return res.status(500).json({
            message: "Erreur serveur",
            error: error.message,
        });
    }
}
//compter le nombre de posts
 const PostNumber=async (req,res) => {
    try{
        const postCount=await Post.count();
        res.status(200).json({postCount});
    }catch(error){
    return res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
    }
}
export {PostNumber,createPost,getAllPosts};