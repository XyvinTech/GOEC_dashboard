import { OCPP_INSTANCE } from "./axiosInstances";

export async function remoteStart(data) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/remoteStartTransaction/GOEC123`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function remoteStop(data) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/remoteStopTransaction/GOEC123`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function clearCache(CPID) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/clear-cache/${CPID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function unlock(CPID,data) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/unlock-connector/${CPID}`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function reset(CPID,data) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/reset/${CPID}`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function changeConfig(data) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.post(
      `ocpp/unlock-connector/GOEC123`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
