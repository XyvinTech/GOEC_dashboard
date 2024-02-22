import { OCPP_INSTANCE } from "./axiosInstances";

export async function remoteStart(data, cpid) {
  try {
    const response = await OCPP_INSTANCE.post(`ocpp/remoteStartTransaction/${cpid}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function remoteStopTransaction(cpid, data) {
  try {
    console.log(cpid, data);
    const response = await OCPP_INSTANCE.post(`ocpp/remoteStopTransaction/${cpid}`, data);
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

export async function unlock(cpid, data) {
  try {

    const response = await OCPP_INSTANCE.post(`ocpp/unlock-connector/${cpid}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function reset(cpid, formData) {
  try {

    const response = await OCPP_INSTANCE.post(`ocpp/reset/${cpid}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function changeConfig(data, cpid) {
  // ? GOEC123 is id or  not?
  try {
    const response = await OCPP_INSTANCE.post(`ocpp/unlock-connector/${cpid}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAllOcppLogs(filter={}) {
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/logs`,{params:filter});
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getOcppLogsByCpid(cpid) {
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/logs/${cpid}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAllOcppTransactionLogs(filter={}) {
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/dashboard/transactionList`,{params:filter});
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAlarms(filter={}) {
  //POST
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/dashboard/machineAlarms`,{params:filter});
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAlarmsById(evMachine,filter={}) {
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/dashboard/machineAlarms/${evMachine}`,{params:filter});
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function ChangeAvailability(cpid, data) {
  try {

    const response = await OCPP_INSTANCE.post(`ocpp/changeAvailability/${cpid}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function Trigger(cpid, data) {
  try {

    const response = await OCPP_INSTANCE.post(`/ocpp/triggerMessage/${cpid}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function LocalList(cpid, data) {
  try {
    const response = await OCPP_INSTANCE.post(`/ocpp/sendLocalList/${cpid}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAlarmSummary() {
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/dashboard/alarm/summary`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTransactionById(evMachine,filter) {
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/dashboard/transactionLog/${evMachine}`,{params:filter});
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getMachineLog(evMachine,filter) {
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/dashboard/machineLog/${evMachine}`,{params:filter});
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getChargingHistory(userId, data) {
  try {
    const response = await OCPP_INSTANCE.post(`ocpp/chargingHistory/${userId}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function getActiveSession() {
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/dashboard/activeSession`);
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function getDashboardAnalytics() {
  try {
    const response = await OCPP_INSTANCE.get(`ocpp/dashboard/analytics`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
