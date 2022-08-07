import { api } from "./api"

export const listarRdosPendentes = () => {
    return api.get("/listarRdos.php")
} 