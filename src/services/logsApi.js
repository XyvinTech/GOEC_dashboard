import { LOGS_URL } from "./axiosInstances";

export async function getServerLogs(filter) {
  try {
    const response = await LOGS_URL.get(`logs`, { params: filter });
    return response.data;
  } catch (error) {
    throw error;
  }
}
