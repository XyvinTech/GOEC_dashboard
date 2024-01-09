import { LAMBDA_INSTANCES } from "./axiosInstances";

export async function createWalletTransaction(data) {
  try {
    const response = await LAMBDA_INSTANCES.post(`walletTransaction/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editWalletTransaction(Id, data) {
  try {
    const response = await LAMBDA_INSTANCES.post(`walletTransaction/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteWalletTransaction(Id) {
  try {
    const response = await LAMBDA_INSTANCES.delete(`walletTransaction/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getWalletTransactionById(Id) {
  try {
    const response = await LAMBDA_INSTANCES.get(`walletTransaction/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getWalletTransactionList() {
  try {
    const response = await LAMBDA_INSTANCES.get(`walletTransaction/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getWalletTransactionFilteredList(start, end) {
  try {
    const response = await LAMBDA_INSTANCES.get(
      `walletTransaction/filteredList?fromDate=${start}&toDate=${end}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
