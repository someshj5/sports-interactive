import { fetchGet } from "./serviceClient";

export const getInfo = async () => {
  return await fetchGet(`https://api.npoint.io/d6bd0efc05639084eb17/`);
};
