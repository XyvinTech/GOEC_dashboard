import { tokenInstance } from "./axiosInstances";

export async function createChargingTariff(data) {
  try {
    const response = await tokenInstance.post(`chargingTariff/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function defaultChargingTariff(data) {
  try {
    const response = await tokenInstance.post(
      `chargingTariff/createUpdate/default`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editChargingTariff(Id, data) {
  try {
    const response = await tokenInstance.put(`chargingTariff/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteChargingTariff(Id) {
  try {
    const response = await tokenInstance.delete(`chargingTariff/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getChargingTariffById(Id) {
  try {
    const response = await tokenInstance.get(`chargingTariff/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getChargingTariffTotalRate() {
  try {
    const response = await tokenInstance.get(
      `chargingTariff/getTotalRate/default`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getChargingTariffList() {
  try {
    const response = await tokenInstance.get(`chargingTariff/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
