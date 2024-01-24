import { OCPP_INSTANCE } from "./axiosInstances";

export async function remoteStart(data,cpid) {
 
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/remoteStartTransaction/${cpid}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function remoteStop(data,cpid) {

  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/remoteStopTransaction/${cpid}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function clearCache(cpid) {
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/clear-cache/${cpid}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function unlock(cpid,data) {
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/unlock-connector/${cpid}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function reset(cpid) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/reset/${cpid}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function changeConfig(data,cpid) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/unlock-connector/${cpid}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
