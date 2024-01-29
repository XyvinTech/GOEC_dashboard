import React from "react";
import { ReactComponent as DangerIcon } from "../../../assets/icons/DangerIcon.svg";
import LastSynced from "../../src/layout/LastSynced";
import { Typography } from "@mui/material";

export default function NoActiveSession() {
  return (
    <>
      <LastSynced heading="Active Sessions" showSearchField={true} />

      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            p: 3,
            color: "var(--Color-Light-Mode-Orange-Orange, #F80)",
            fontFeatureSettings: "clig off, liga off",
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px",
          }}
        >
          <DangerIcon /> No Data Yet
        </Typography>
      </div>
    </>
  );
}
