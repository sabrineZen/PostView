const API_URL = "http://localhost:5000/api";

const register = async (nom, email, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nom,
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};

const login = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  return {
    ok: response.ok,
    data,
  };
};

const getNumberOfUsers = async () => {
  const response = await fetch(`${API_URL}/users/number`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const getUserNameById = async (id) => {
  const response = await fetch(`${API_URL}/users/name/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const updateUser = async (id, nom, bio, photoProfil) => {
  const formData = new FormData();
  formData.append("nom", nom);
  formData.append("bio", bio);
  if (photoProfil) {
    formData.append("photoProfil", photoProfil);
  }

  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de la mise à jour du profil");
  }
  return data;
};

const getAllUsers = async () => {
  const response = await fetch(`${API_URL}/users/all`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

const getNotifications = async (utilisateurId) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const response = await fetch(`${API_URL}/notifications/${utilisateurId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.token || ""}`,
    },
  });

  const data = await response.json();
  return data;
};

const getAllPosts = async (utilisateurId) => {
  const query = utilisateurId ? `?utilisateurId=${utilisateurId}` : "";
  const response = await fetch(`${API_URL}/posts/getAllPosts${query}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const createPost = async (contenu, image, utilisateurId) => {
  const formData = new FormData();

  formData.append("contenu", contenu);
  formData.append("utilisateurId", utilisateurId);

  if (image) {
    formData.append("image", image);
  }

  const response = await fetch(`${API_URL}/posts/createPost`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Erreur backend :", data);
    throw new Error(data.message || "Erreur lors de la création du post");
  }

  return data;
};

const getNumberOfPosts = async () => {
  const response = await fetch(`${API_URL}/posts/postNumber`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const createComment = async (postId, utilisateurId, contenu) => {
  const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId, utilisateurId, contenu }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de l'ajout du commentaire");
  }

  return data;
};

const toggleLike = async (postId, utilisateurId) => {
  const response = await fetch(`${API_URL}/posts/${postId}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ utilisateurId }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erreur lors du like");
  }

  return data;
};
const searchUsersByName = async (name) => {
  const response = await fetch(`${API_URL}/users/search?name=${encodeURIComponent(name)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de la recherche d'utilisateurs");
  }
  return data;
};
const createProfileVisit = async (visiteurId, profilVisiteId) => {
  const response = await fetch(`${API_URL}/profilVisit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ visiteurId, profilVisiteId }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de l'enregistrement de la visite");
  }
  return data;
};

// recuperer le nombre de visites pour un profil spécifique
const getNumberOfVisitsProfil = async ( profilVisiteId) => {
  const response = await fetch(`${API_URL}/profilVisit/${profilVisiteId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de la recherche de visites");
  }
  return data;
};
//partie follow
 const followUser=async(followerId,followingId)=>{
  const response=await fetch(`${API_URL}/follow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ followerId, followingId }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Erreur lors du suivi de l'utilisateur");
  }
  return data;
};
const unfollowUser=async(followerId,followingId)=>{
  const response=await fetch(`${API_URL}/unfollow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ followerId, followingId }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Erreur lors du non-suivi de l'utilisateur");
  }
  return data;
};
 const getFollowers=async(userId)=>{
  const response=await fetch(`${API_URL}/followers/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de la récupération des followers");
  }
  return data;
};
 const getFollowing=async(userId)=>{
  const response=await fetch(`${API_URL}/following/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de la récupération des utilisateurs suivis");
  }
  return data;
};
const getNumberOfFollowers=async(userId)=>{
  const response=await fetch(`${API_URL}/followers/count/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de la récupération du nombre de followers");
  }
  return data;
};
const getNumberOfFollowing=async(userId)=>{
  const response=await fetch(`${API_URL}/following/count/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de la récupération du nombre d'utilisateurs suivis");
  }
  return data;
};
export {
  register,
  login,
  getNumberOfUsers,
  getNumberOfPosts,
  getAllPosts,
  createPost,
  getUserNameById,
  updateUser,
  getAllUsers,
  searchUsersByName,
  createProfileVisit,
  getNumberOfVisitsProfil,
  getNotifications,
  createComment,
  toggleLike,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing
  ,getNumberOfFollowers,
  getNumberOfFollowing
};
