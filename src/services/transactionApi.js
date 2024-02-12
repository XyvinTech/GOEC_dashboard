import { TRANSACTION_URL } from "./axiosInstances";
export async function getTransactionList() {
  try {
    const response = await TRANSACTION_URL.get(`walletTransaction/dashboard/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getWalletTransaction(data) {
  try {
    const response = await TRANSACTION_URL.post(`walletTransaction/dashboardUser/List`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
