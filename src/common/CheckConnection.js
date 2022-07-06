import React from "react";
import { Detector } from "react-detect-offline";

const CheckConnection = (props) => {
  return (
    <Detector
      render={({ online }) =>
        online ? (
          props.children
        ) : (
          <div
            style={{
              paddintTop: "20px",
              textAlign: "center",
              padding: "100px",
            }}
          >
            <h1>No Connections</h1>
            <h4>Please check your internet connection!</h4>
          </div>
        )
      }
    />
  );
};

export default CheckConnection;
