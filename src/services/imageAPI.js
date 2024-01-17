import { IMAGE_UPLOAD_URL } from "./axiosInstances";



export async function imageUploadAPI(file) {
    try {
      const form = new FormData();
      form.append('image', file);
      const response = await IMAGE_UPLOAD_URL.post(
        `/image/upload`,
        form
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }