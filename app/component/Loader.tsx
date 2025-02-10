import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div>
      <Image
        width={1000}
        height={1000}
        className="w-screen h-screen object-center fixed left-0 top-0 right-0 bottom-0 z-[999]"
        src={"/assets/loader.jpg"}
        alt="loader"
      />
    </div>
  );
}
