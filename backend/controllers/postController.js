import Post from "../models/post.js";
import Commentaire from "../models/commentaire.js";
import Like from "../models/like.js";
import Utilisateur from "../models/utilisateur.js";

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

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [
                {
                    association: "utilisateur",
                    attributes: ["id", "nom"],
                },
                {
                    association: "commentaires",
                    include: [{ association: "utilisateur", attributes: ["id", "nom"] }],
                },
                {
                    association: "likes",
                },
            ],
            order: [["createdAt", "DESC"]],
        });

        const formattedPosts = posts.map((post) => {
            const plainPost = post.toJSON();

            return {
                ...plainPost,
                likesCount: Array.isArray(plainPost.likes) ? plainPost.likes.length : 0,
                commentsCount: Array.isArray(plainPost.commentaires) ? plainPost.commentaires.length : 0,
            };
        });

        res.status(200).json({ Posts: formattedPosts });
    } catch (error) {
        return res.status(500).json({
            message: "Erreur serveur",
            error: error.message,
        });
    }
};

const PostNumber = async (req, res) => {
    try {
        const postCount = await Post.count();
        res.status(200).json({ postCount });
    } catch (error) {
        return res.status(500).json({
            message: "Erreur serveur",
            error: error.message,
        });
    }
};

export { PostNumber, createPost, getAllPosts };