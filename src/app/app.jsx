import Link from "next/link";
import React from "react";

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <Link href={"/projects"}>
        <h3>Projects</h3>
      </Link>
    </div>
  );
}
