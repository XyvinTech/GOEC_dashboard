import { TRANSACTION_URL } from "./axiosInstances";

export async function createWalletTransaction(data) {
  try {
    const response = await TRANSACTION_URL.post(`walletTransaction/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editWalletTransaction(Id, data) {
  try {
    const response = await TRANSACTION_URL.post(`walletTransaction/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteWalletTransaction(Id) {
  try {
    const response = await TRANSACTION_URL.delete(`walletTransaction/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getWalletTransactionById(Id) {
  try {
    const response = await TRANSACTION_URL.get(`walletTransaction/${Id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getWalletTransactionList() {
  try {
    const response = await TRANSACTION_URL.get(`walletTransaction/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getWalletTransactionFilteredList(start, end) {
  try {
    const response = await TRANSACTION_URL.get(
      `walletTransaction/filteredList?fromDate=${start}&toDate=${end}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function getWalletReport(params) {
  try {
    const response = await TRANSACTION_URL.get(
      `walletTransaction/dashboard/report`,{params:params}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAccountTransactionReport(params) {
  try {
    const response = await TRANSACTION_URL.get(
      `walletTransaction/dashboard/account-transaction/report`,{params:params}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}