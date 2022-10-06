import React from "react";
import Header from "../layout/header";
import NavigationBar from "../layout/navigationBar";

type addTaskProps = {};

export default function AddTask({}: addTaskProps) {
  return (
    <div className="flex flex-col justify-between h-screen gap-24">
      <Header />
      <NavigationBar />
    </div>
  );
}
