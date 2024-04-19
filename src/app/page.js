"use client";
import { useRouter } from "next/navigation";
import HomePage from "./home/page";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return (
    <main>
      <HomePage />
    </main>
  );
}
