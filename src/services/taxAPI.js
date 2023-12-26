import { tokenInstance } from "./axiosInstances";

export async function createTax(data) {
  try {
    const response = await tokenInstance.post(`tax/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editTax(Id, data) {
  try {
    const response = await tokenInstance.put(`tax/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteTax(Id) {
  try {
    const response = await tokenInstance.delete(`tax/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTaxById(Id) {
  try {
    const response = await tokenInstance.get(`tax/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTaxList() {
  try {
    const response = await tokenInstance.get(`tax/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
