import { NOTIFICATION_URL } from "./axiosInstances";

export async function sendBulkMail(data) {
  try {
    console.log(data);
    const response = await NOTIFICATION_URL.post(`notification/dashboard/email`, data,{
      headers: {
        'Content-Type': 'multipart/form-data', // Set Content-Type for this request
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function sendAppNotification(data) {
  try {
    const response = await NOTIFICATION_URL.post(`notification/dashboard/firebase`, data, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set Content-Type for this request
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}