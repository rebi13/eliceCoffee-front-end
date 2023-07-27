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

const get = async (url) => {
  const res = await fetch(`${API_END_POINT}/${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "GET",
  });

  // 응답 코드가 4XX 계열일 때 (400, 403 등)
  if (!res.ok) {
    const errorContent = await res.json();
    const { reason } = errorContent;

    throw new Error(reason);
  }

  const result = await res.json();

  return result;
};

const put = async (url, data) => {
  const res = await fetch(`${API_END_POINT}/${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    alert(error.errorMessage);
    throw new Error(error.errorMessage);
  }

  return res;
};

const patch = async (url, data) => {
  const res = await fetch(`${API_END_POINT}/${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "PATCH",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    alert(error.errorMessage);
    throw new Error(error.errorMessage);
  }

  return res;
};

const del = async (url, data) => {
  const res = await fetch(`${API_END_POINT}/${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "DELETE",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    alert(error.errorMessage);
    throw new Error(error.errorMessage);
  }

  return res;
};

export default { post, get, put, patch, del };
