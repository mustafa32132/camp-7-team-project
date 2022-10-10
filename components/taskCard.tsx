import React from "react";
import TokenIcon from "../public/images/Token.svg";

type taskCardProps = {};

export default function TaskCard({}: taskCardProps) {
  return (
    <div className="flex flex-col rounded-md h-1/4 w-11/12 bg-slate-500">
      <div className="flex">
        <TokenIcon className="text-gold text-xl" />
      </div>
      <div className="flex"></div>
      <div className="flex"></div>
    </div>
  );
}
