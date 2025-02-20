import React from "react";
import { Audio } from "react-loader-spinner"; // Import the component

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Audio
        height="80"
        width="80"
        color="green"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
