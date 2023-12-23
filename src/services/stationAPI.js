import { tokenInstance } from "./axiosInstances";

export async function createChargingStation(data) {
  try {
    const response = await tokenInstance.post(`chargingStations/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editChargingStation(Id, data) {
  try {
    const response = await tokenInstance.put(`chargingStations/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteChargingStation(Id) {
  try {
    const response = await tokenInstance.delete(`chargingStations/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getChargingStationById(Id) {
  try {
    const response = await tokenInstance.get(`chargingStations/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getChargingStationList() {
  try {
    const response = await tokenInstance.get(`chargingStations/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateChargingStationByList(data) {
  try {
    const response = await tokenInstance.post(
      `chargingStations/nearBy/list`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
