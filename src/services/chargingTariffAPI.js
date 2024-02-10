import { CONFIG_INSTANCES } from "./axiosInstances";

export async function createChargingTariff(data) {
  try {
    const response = await CONFIG_INSTANCES.post(`chargingTariff/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function defaultChargingTariff(data) {
  try {
    const response = await CONFIG_INSTANCES.post(
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
    const response = await CONFIG_INSTANCES.put(`chargingTariff/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteChargingTariff(Id) {
  try {
    const response = await CONFIG_INSTANCES.delete(`chargingTariff/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getChargingTariffById(Id) {
  try {
    const response = await CONFIG_INSTANCES.get(`chargingTariff/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getChargingTariffTotalRate() {
  try {
    const response = await CONFIG_INSTANCES.get(
      `chargingTariff/getTotalRate/default`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getChargingTariffList() {
  try {
    const response = await CONFIG_INSTANCES.get(`chargingTariff/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
