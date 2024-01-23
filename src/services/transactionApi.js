import { TRANSACTION_URL } from "./axiosInstances";
export async function getTransactionList() {
    try {
      const response = await TRANSACTION_URL.get(`walletTransaction/dashboard/list`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  