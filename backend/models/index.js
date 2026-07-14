import Utilisateur from "./utilisateur.js";
import Post from "./post.js";
import Commentaire from "./commentaire.js";
import Like from "./like.js";
import ProfilVisite from "./profilVisite.js";   
import Follow from "./follow.js";
//relation entre post et utilisateur
Post.belongsTo(Utilisateur,{foreignKey:'utilisateurId',as:'utilisateur'});
Utilisateur.hasMany(Post,{foreignKey:'utilisateurId',as:'posts'});
///relation entre utilisateur et commentaire
Utilisateur.hasMany(Commentaire,{foreignKey:'utilisateurId',as:'commentaires'});
Commentaire.belongsTo(Utilisateur,{foreignKey:'utilisateurId',as:'utilisateur'});
//relation entre post et commentaire
Post.hasMany(Commentaire,{foreignKey:'postId',as:'commentaires'});
Commentaire.belongsTo(Post,{foreignKey:'postId',as:'post'});
//relation entre like et utilisateur 
Utilisateur.hasMany(Like,{foreignKey:'utilisateurId',as:'likes'});
Like.belongsTo(Utilisateur,{foreignKey:'utilisateurId',as:'utilisateur'});
//relation entre like et post 
Post.hasMany(Like,{foreignKey:'postId',as:'likes'});
Like.belongsTo(Post,{foreignKey:'postId',as:'post'});
//relation entre profilVisite et utilisateur
Utilisateur.hasMany(ProfilVisite,{foreignKey:'visiteurId',as:'visites'});
ProfilVisite.belongsTo(Utilisateur,{foreignKey:'visiteurId',as:'visiteur'});
Utilisateur.hasMany(ProfilVisite,{foreignKey:'profilVisiteId',as:'visitesRecues'});
ProfilVisite.belongsTo(Utilisateur,{foreignKey:'profilVisiteId',as:'utilisateurvisite'});
//relation entre utilisateur et follow
// Les personnes que je suis
Utilisateur.hasMany(Follow,{ foreignKey:'followerId',as:'following'});
Follow.belongsTo(Utilisateur,{foreignKey:'followerId',as:'follower'});

// Les personnes qui me suivent
Utilisateur.hasMany(Follow,{foreignKey:'followingId',as:'followers'});

Follow.belongsTo(Utilisateur,{foreignKey:'followingId',as:'following'});


export{Utilisateur,Post,Commentaire,Like,ProfilVisite,Follow};