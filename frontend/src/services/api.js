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

export { register, login };