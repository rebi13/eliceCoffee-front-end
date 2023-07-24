import { API_END_POINT } from "./../../constants/index.js";

const post = async (url, data) => {
  const res = await fetch(`${API_END_POINT}/${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    alert(error.errorMessage);
    throw new Error(error.errorMessage);
  }

  return res;
};

export default { post };
