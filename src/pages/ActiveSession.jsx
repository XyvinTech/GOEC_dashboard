import React from 'react'
import ActiveSession from '../components/cpoSupport/activeSession/AllActiveSession'
import NoActiveSession from '../components/cpoSupport/activeSession/NoActiveSession'
import { DummyData } from "../assets/json/ActiveSessionsData";

export default function ActiveSessionPage() {
  return (
    <>
     {DummyData.length > 0 ? (
        <ActiveSession  />
      ) : (
        <NoActiveSession />
      )}
    </>
  )
}
