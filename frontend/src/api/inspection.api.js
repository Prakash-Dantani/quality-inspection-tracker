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
    const create_response = await api.post("/", data);
    return create_response.data;
};

export const resolveInspection = async (id, data) => {
    const response = await api.patch(`/${id}/resolve`, data);
    return response.data;
};