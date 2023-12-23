import { loginInstance, tokenInstance } from "./axiosInstances";

export async function createUser(data) {
  try {
    const response = await loginInstance.post(`users/user`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editUser(userId, data) {
  try {
    const response = await tokenInstance.put(`users/${userId}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function editUserByMob(mob, data) {
  try {
    const response = await tokenInstance.put(
      `users/update/byMobileNo/${mob}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteUser(userId, data) {
  try {
    const response = await tokenInstance.delete(`users/${userId}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUserById(userId) {
  try {
    const response = await tokenInstance.get(`users/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUserByMob(mob) {
  try {
    const response = await tokenInstance.get(`users/user/byMobileNo/${mob}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUsersList() {
  try {
    const response = await tokenInstance.get(`users/list`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addFavSatation(stationId, data) {
  try {
    const response = await tokenInstance.put(
      `users/addFavoriteStation/${stationId}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function removeFavSatation(stationId, data) {
  try {
    const response = await tokenInstance.put(
      `users/removeFavoriteStation/${stationId}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addVehicle(vehId, data) {
  try {
    const response = await tokenInstance.put(`users/addVehicle/${vehId}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function removeVehicle(vehId, data) {
  try {
    const response = await tokenInstance.put(
      `users/removeVehicle${vehId}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addRfidTag(Id, data) {
  try {
    const response = await tokenInstance.put(`users/addRfidTag/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function removeRfidTag(Id, data) {
  try {
    const response = await tokenInstance.put(`users/removeRfidTag/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function removeRfidTagById(Id, data) {
  try {
    const response = await tokenInstance.put(
      `users/removeRfidTagById/${Id}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fromWallet(Id, data) {
  try {
    const response = await tokenInstance.put(
      `users/deductFromWallet/${Id}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function toWallet(Id, data) {
  try {
    const response = await tokenInstance.put(`users/addToWallet/${Id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function userRfidAuth() {
  // ? Confusion to 111222333444 is id or  not?
  try {
    const response = await tokenInstance.get(
      `users/transaction/rfid-authenticate/111222333444`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function userTransaction(Id) {
  try {
    const response = await tokenInstance.put(
      `users/transaction/authenticate/${Id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
