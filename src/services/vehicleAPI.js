import { LAMBDA_INSTANCES } from "./axiosInstances";

export async function createVehicle(data) {
  try {
    const response = await LAMBDA_INSTANCES.post(`vehicle/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editVehicle(Id, data) {
  try {
    const response = await LAMBDA_INSTANCES.put(`vehicle/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteVehicle(Id) {
  try {
    const response = await LAMBDA_INSTANCES.delete(`vehicle/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getVehicleById(Id) {
  try {
    const response = await LAMBDA_INSTANCES.get(`vehicle/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getVehicleList() {
  try {
    const response = await LAMBDA_INSTANCES.get(`vehicle/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
