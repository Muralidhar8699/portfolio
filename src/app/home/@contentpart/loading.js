import React from "react";

export default function LoadingPage() {
  return (
    <div
      style={{
        width: "50rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        position: "absolute",
        top:"10%",
        left:"22%"
      }}
    >
      <img
        src="https://res.cloudinary.com/dw74xtlxl/image/upload/v1713446164/p5dije9komrbqxaryfvl.gif"
        alt="logo"
      />
    </div>
  );
}
