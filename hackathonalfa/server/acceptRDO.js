import { api } from "./api"

export const acceptRDO = (id, cpfAprovou) => {
    return api.post("/aprovarRdo.php", {id, cpfAprovou})
} 