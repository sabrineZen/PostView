import Like from "../models/like.js";
import Post from "../models/post.js";
import Notification from "../models/notification.js";
import Utilisateur from "../models/utilisateur.js";
const toggleLike = async (req, res) => {
  try {
    const { postId } = req.params;
    const { utilisateurId } = req.body;

    if (!postId || !utilisateurId) {
      return res.status(400).json({ message: "Le post et l'utilisateur sont obligatoires." });
    }

    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post introuvable." });
    }

    const utilisateur = await Utilisateur.findByPk(utilisateurId);
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur introuvable." });
    }

    const existingLike = await Like.findOne({
      where: { postId, utilisateurId },
    });

    if (existingLike) {
      await existingLike.destroy();
      const likesCount = await Like.count({ where: { postId } });

      return res.status(200).json({
        message: "Like retiré.",
        liked: false,
        likesCount,
      });
    }

    await Like.create({ postId, utilisateurId });

    const postOwnerId = post.utilisateurId;
    if (Number(postOwnerId) !== Number(utilisateurId)) {
      await Notification.create({
        type: "like",
        message: "a aimé votre publication.",
        utilisateurId: postOwnerId,
        emetteurId: utilisateurId,
        lu: false,
      });
    }

    const likesCount = await Like.count({ where: { postId } });

    return res.status(201).json({
      message: "Like ajouté.",
      liked: true,
      likesCount,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

const getLikesByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const likes = await Like.findAll({
      where: { postId },
      include: [{ association: "utilisateur", attributes: ["id", "nom"] }],
    });

    return res.status(200).json({
      likesCount: likes.length,
      likes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

export { toggleLike, getLikesByPost };
