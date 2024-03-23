import React, { useEffect, useState } from "react";
import ActiveSession from "../components/cpoSupport/activeSession/AllActiveSession";
import NoActiveSession from "../components/cpoSupport/activeSession/NoActiveSession";
import { DummyData } from "../assets/json/ActiveSessionsData";
import { getActiveSession } from "../services/ocppAPI";
import { tableHeaderReplace } from "../utils/tableHeaderReplace";

function restructureData(dataArray) {
  
  return dataArray.map((item) => ({
    _id: item._id,
    transactionId: item.transactionId,
    username: item.username,
    chargingStationName: item.chargingStationName,
    startTime: item.startTime,
    cpid: item.cpid,
    connectorId: item.connectorId,
    startSoc: item.startSoc,
    currentSoc: item.currentSoc,
    unitConsumed: item.unitConsumed,
    duration: item.duration,
    chargeSpeed: item.chargeSpeed,
    lastMeterReceived: item.updatedAt,
    transactionMode: item.transactionMode,
    terminateSession: "Stop",
  }));
}

export default function ActiveSessionPage() {
  const [activeSession, setActiveSession] = useState([]);

  const getData = async () => {
    const res = await getActiveSession();
    console.log(res.result);
    setActiveSession(res.result);
  };

  const tableHeader = [
    "OCPP Txn ID",
    "User Name",
    "Charge Station Name",
    "Date",
    "CPID",
    "Connector ID",
    "Start Soc",
    "Current Soc",
    "Units Consumed(kWh)",
    "Duration",
    "Charging Speed",
    "Last Meter Value Received",
    "Transaction Mode",
    "Terminate Session",

  ];

  useEffect(() => {
    getData();
  }, []);

  // const restructuredData = restructureData(activeSession);

  const activeSessionData = tableHeaderReplace(
    activeSession,
    [
      "transactionId",
      "username",
      "chargingStationName",
      "startTime",
      "cpid",
      "connectorId",
      "startSoc",
      "currentSoc",
      "unitConsumed",
      "duration",
      "chargeSpeed",
      "lastMeterValue",
      "transactionMode",
      "terminateSession",
    ],
    tableHeader
  );


  return (
    <>{activeSession.length > 0 ? <ActiveSession data={activeSessionData} tableHeader={tableHeader}/> : <NoActiveSession />}</>
  );
}
