import { EV_MACHINE_INSTANCE } from "./axiosInstances";

export async function createEvMachine(data) {
  try {
    const response = await EV_MACHINE_INSTANCE.post(`evMachine`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editEvMachine(Id, data) {
  try {
    const response = await EV_MACHINE_INSTANCE.put(`evMachine/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteEvMachine(Id) {
  try {
    const response = await EV_MACHINE_INSTANCE.delete(`evMachine/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getEvMachineById(Id) {
  try {
    const response = await EV_MACHINE_INSTANCE.get(`evMachine/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function listEvMachine() {
  try {
    const response = await EV_MACHINE_INSTANCE.get(`evMachine/dashboard/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateEvMachineStatus(data) {
  try {
    const response = await EV_MACHINE_INSTANCE.post(
      `evMachine/updateStatusConnector/CP 1`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addConnector(Id, data) {
  try {
    const response = await EV_MACHINE_INSTANCE.put(
      `evMachine/addConnector/${Id}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function removeConnector(Id, data) {
  try {
    const response = await EV_MACHINE_INSTANCE.put(
      `evMachine/removeConnector/${Id}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
