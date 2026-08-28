import jwt from "jsonwebtoken";

const protectedRoute = (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization?.startsWith("Bearer ")
    ? authorization.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({ message: "Authentification requise" });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || "postview-secret");
    return next();
  } catch {
    return res.status(401).json({ message: "Token invalide ou expiré" });
  }
};

export default protectedRoute;
