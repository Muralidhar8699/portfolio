"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ProjectsPage() {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/home/projects") {
    console.log(pathname);
    useEffect(() => {
      router.push("/home/projects/ogami");
    });
  }
  return <section>{/* <Projectslayout /> */}</section>;
}
