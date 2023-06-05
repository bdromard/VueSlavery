import http from "../http-common";

class SlavesDataService {
    getAll() {
        return http.get("/slaves");
    }

    get(id) {
        return http.get(`/slaves/${id}`);
    }

    create(data) {
        return http.post("/slaves", data);
    }

    update(id, data) {
        return http.put(`/slaves/${id}`, data);
    }

    delete(id) {
        return http.delete(`/slaves/${id}`);
    }

    deleteAll() {
        return http.delete('/slaves');
    }
}

export default new SlavesDataService();