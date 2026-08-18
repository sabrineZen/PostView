import Commentaire from "../models/commentaire.js";
import Post from "../models/post.js";
import Utilisateur from "../models/utilisateur.js";
import Notification from "../models/notification.js";

const createComment = async (req, res) => {
  try {
    const { postId, utilisateurId, contenu } = req.body;

    if (!postId || !utilisateurId || !contenu || !String(contenu).trim()) {
      return res.status(400).json({ message: "Le post, l'utilisateur et le contenu sont obligatoires." });
    }

    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post introuvable." });
    }

    const utilisateur = await Utilisateur.findByPk(utilisateurId);
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur introuvable." });
    }

    const commentaire = await Commentaire.create({
      contenu: String(contenu).trim(),
      postId,
      utilisateurId,
    });

    if (Number(post.utilisateurId) !== Number(utilisateurId)) {
      await Notification.create({
        type: "comment",
        message: "a commenté votre publication.",
        utilisateurId: post.utilisateurId,
        emetteurId: utilisateurId,
        lu: false,
      });
    }

    const commentaireComplet = await Commentaire.findByPk(commentaire.id, {
      include: [{
        association: "utilisateur",
        attributes: ["id", "nom"],
      }],
    });

    return res.status(201).json({
      message: "Commentaire ajouté.",
      commentaire: commentaireComplet,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

const getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const commentaires = await Commentaire.findAll({
      where: { postId },
      include: [{
        association: "utilisateur",
        attributes: ["id", "nom"],
      }],
      order: [["createdAt", "ASC"]],
    });

    return res.status(200).json({ commentaires });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

export { createComment, getCommentsByPost };
