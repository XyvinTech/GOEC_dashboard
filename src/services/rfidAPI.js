import { LAMBDA_INSTANCES } from "./axiosInstances";

export async function createRfid(data) {
  try {
    const response = await LAMBDA_INSTANCES.post(`rfid/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editRfid(Id, data) {
  try {
    const response = await LAMBDA_INSTANCES.put(`vehicle/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteRfid(Id) {
  try {
    const response = await LAMBDA_INSTANCES.delete(`vehicle/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getRfidById(Id) {
  try {
    const response = await LAMBDA_INSTANCES.get(`vehicle/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getRfidBySNo() {
  try {
    // ? 111222333444 is id or  not?
    const response = await LAMBDA_INSTANCES.get(
      `rfid/rfidbySerialNumber/111222333444`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getRfidList() {
  try {
    const response = await LAMBDA_INSTANCES.get(`rfid/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
