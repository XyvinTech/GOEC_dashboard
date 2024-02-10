import { CONFIG_INSTANCES } from "./axiosInstances";

export async function createTax(data) {
  try {
    const response = await CONFIG_INSTANCES.post(`tax/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editTax(Id, data) {
  try {
    const response = await CONFIG_INSTANCES.put(`tax/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteTax(Id) {
  try {
    const response = await CONFIG_INSTANCES.delete(`tax/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTaxById(Id) {
  try {
    const response = await CONFIG_INSTANCES.get(`tax/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTaxList() {
  try {
    const response = await CONFIG_INSTANCES.get(`tax/list`);
    console.log('---->',response.data);
    return response.data;
  } catch (error) {
    console.log('--->',error)
    throw error;
  }
}
