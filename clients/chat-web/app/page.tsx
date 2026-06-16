"use client";
import { useState } from "react";
import { APP_NAME } from "@autix/contracts";

export default function Home() {
  const [result, setResult] = useState<string>("");

  async function callApi() {
    console.log("Calling API...");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/hello`);
    const data = await res.json();
    setResult(data.message);
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>{APP_NAME}</h1>
      <div onClick={callApi}>调用 API</div>
      <div style={{ marginTop: 16 }}>{result}</div>
    </main>
  );
}
