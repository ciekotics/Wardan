import Image from "next/image";
import React from "react";

const Separator = () => {
  return (
    <span>
      <Image
        src={"/images/separator.svg"}
        alt="separator"
        width={150}
        height={40}
      />
    </span>
  );
};

export default Separator;
