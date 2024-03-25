"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Projectslayout from "./layout";

export default function ProjectsPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/projects/ogami");
  }, []);
  return <section>{/* <Projectslayout /> */}</section>;
}
