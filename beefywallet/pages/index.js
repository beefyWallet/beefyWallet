import React from "react";
import Dashboard from "./app/Dashboard";
import dynamic from "next/dynamic";

const Dashboardd = dynamic(() => import("./app/Dashboard"), { ssr: false });
export default function Home() {
  return <Dashboardd />;
}
