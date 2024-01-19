import { REVIEW_INSTANCE } from "./axiosInstances";

export async function getReviewBySation(id) {
    try {
      const response = await REVIEW_INSTANCE.get(`/review/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  export async function deleteReview(id) {
    try {
      const response = await REVIEW_INSTANCE.delete(`/review/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
