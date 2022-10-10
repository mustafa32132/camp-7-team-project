import React from "react";
import TokenIcon from "../public/images/Token.svg";

type taskCardProps = {};

export default function TaskCard({}: taskCardProps) {
  return (
    <div className="flex flex-col rounded-md h-[29%] w-[88%] bg-white shadow-md">
      <div className="flex ">
        <TokenIcon className="text-gold text-xl" />
      </div>
      <div className="flex"></div>
      <div className="flex"></div>
    </div>
  );
}
