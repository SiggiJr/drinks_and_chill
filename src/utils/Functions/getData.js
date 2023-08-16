import { apiBaseLink } from "../ApiLink/ApiLink";

export const getIngredients = () => {
  return fetch(`${apiBaseLink}?a=list`).then((response) => {
    if (!response.ok) {
      throw new Error("Fetch Fehlgeschlagen");
    }
    return response.json();
  });
};
