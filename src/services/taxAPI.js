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

export async function getTaxList(filter={}) {
  try {
    const response = await CONFIG_INSTANCES.get(`tax/list`,{params:filter});
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTaxListDropdown() {
  try {
    const response = await CONFIG_INSTANCES.get(`tax/list/dropdown`);
    return response.data;
  } catch (error) {
    throw error;
  }
}