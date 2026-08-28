import Notification from "../models/notification.js";
import Utilisateur from "../models/Utilisateur.js";

const getNotificationsByUser = async (req, res) => {
  try {
    const { utilisateurId } = req.params;

    const notifications = await Notification.findAll({
      where: { utilisateurId },
      include: [
        {
          model: Utilisateur,
          as: "emetteur",
          attributes: ["id", "nom"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({ notifications });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

const createNotification = async ({ utilisateurId, type, message, emetteurId = 0 }) => {
  if (!utilisateurId || !type || !message) {
    return null;
  }

  return Notification.create({
    utilisateurId,
    type,
    message,
    emetteurId,
  });
};

export { getNotificationsByUser, createNotification };
