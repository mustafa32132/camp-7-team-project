import React from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import TokenIcon from "../public/images/Token.svg";

type headerProps = {};

export default function Header({}: headerProps) {
  return (
    <div className="h-auto top-0 p-2">
      <div className="flex justify-between">
        <Link href="/">
          <HomeIcon className="h-10 w-10 text-white" />
        </Link>
        <div className="flex items-center">
          {/* ${Tokens} */}
          <section className="text-xl">200</section>
          <TokenIcon className="h-10 w-10" />
        </div>
        <Link href="/avatar">
          <UserCircleIcon className="h-10 w-10 text-white" />
        </Link>
      </div>
    </div>
  );
}
