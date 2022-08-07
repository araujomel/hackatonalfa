import { api } from "./api"

export const login = (cpf, senha) => {
    return api.post("/login.php", {cpf, senha})
} 