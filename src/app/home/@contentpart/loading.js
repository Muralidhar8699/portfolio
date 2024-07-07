import React from "react";
import "../../../components/loading/loading.scss";

export default function LoadingPage() {
  return (
    <div className="main" style={{ position: "absolute", top: 0 ,scale:2,backgroundColor:"rgba(203, 198, 198, 0.361)"}}>
      <div class="loader">
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
      </div>
    </div>
  );
}
