import { token } from "../components/token";
const API = "https://api.themoviedb.org/3";

export function getApi(path) {
   return fetch(`${API}${path}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => response.json());
}
