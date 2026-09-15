import api from "./api";

export const getSummary = async () => {
    const summary_response = await api.get("/dashboard");
    return summary_response.data;
}
export const getInspections = (params) => {
    return api.get("/inspections", { params });
};

export const createInspection = (data) => {
    return api.post("/inspections", data);
};

export const resolveInspection = (id, data) => {
    return api.patch(`/inspections/${id}/resolve`, data);
};