import { API_END_POINT } from "./../../constants/index.js";

const post = async (url, data = {}) => {
  const res = await fetch(`${API_END_POINT}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  // 응답 코드가 4XX 계열일 때 (400, 403 등)
  if (!res.ok) {
    const errorContent = await res.json();
    const { errorMessage } = errorContent;
    alert(errorMessage);
    throw new Error(errorMessage);
  }

  const result = res.json();

  return result;
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
    const { errorMessage } = errorContent;
    alert(errorMessage);
    throw new Error(errorMessage);
  }

  const result = await res.json();

  return result;
};

const put = async (url, data = {}) => {
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

  const result = await res.json();

  return result;
};

const patch = async (url, data = {}) => {
  const res = await fetch(`${API_END_POINT}/${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "PATCH",
    body: JSON.stringify(data),
  });

  // 응답 코드가 4XX 계열일 때 (400, 403 등)
  if (!res.ok) {
    const errorContent = await res.json();
    const { errorMessage } = errorContent;
    alert(errorMessage);
    throw new Error(errorMessage);
  }

  const result = await res.json();

  return result;
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
