
const API = process.env.REACT_APP_API;
const TOKEN = process.env.REACT_APP_API_TOKEN;

export function getApi(path) {
   return fetch(`${API}${path}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => response.json());
}
