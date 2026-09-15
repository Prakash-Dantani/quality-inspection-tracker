import api from "./api";

export const getSummary = async () => {
    const summary_response = await api.get("/dashboard");
    return summary_response.data;
}
export const getInspections = async (params) => {
    const inspection_response = await api.get("/", { params });
    return inspection_response.data;
};

export const createInspection = async (data) => {
    return await api.post("/", data);
};

export const resolveInspection = async (id, data) => {
    return await api.patch(`/${id}/resolve`, data);
};