import { tokenInstance } from "./axiosInstances";

export async function createVehicle(data) {
  try {
    const response = await tokenInstance.post(`vehicle/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editVehicle(Id, data) {
  try {
    const response = await tokenInstance.put(`vehicle/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteVehicle(Id, data) {
  try {
    const response = await tokenInstance.delete(`vehicle/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getVehicleById(Id, data) {
  try {
    const response = await tokenInstance.get(`vehicle/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getVehicleList(Id, data) {
  try {
    const response = await tokenInstance.get(`vehicle/list`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
