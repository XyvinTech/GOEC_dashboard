import { IMAGE_UPLOAD_URL } from "./axiosInstances";



export async function imageUploadAPI(file) {
    try {
      const response = await IMAGE_UPLOAD_URL.post(
        `/image/upload`,
        file
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }