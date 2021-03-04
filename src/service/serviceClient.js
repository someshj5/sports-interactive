import fetch from "isomorphic-unfetch";

const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };

  return headers;
};

const tryJson = async (res) => {
  try {
    return await res.json();
  } catch (_error) {
    return undefined;
  }
};

export const fetchGet = async (url) => {
  return await fetch(url, {
    method: "GET",
    headers: getHeaders(),
  })
    .then(async (resp) => {
      if (!resp.ok) {
        const body = await tryJson(resp);
        throw new Error(body ? body.detail : "Something went wrong");
      }
      return await resp.json();
    })
    .catch((err) => {});
};
