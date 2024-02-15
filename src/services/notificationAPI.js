import { NOTIFICATION_URL } from "./axiosInstances";

export async function sendBulkMail(data) {
  try {
    const response = await NOTIFICATION_URL.post(`notification/dashboard/email`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function sendAppNotification(data) {
  try {
    const response = await NOTIFICATION_URL.post(`notification/dashboard/firebase`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
}