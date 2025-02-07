// filepath: /E:/paymorz-frontend/nextjs-qc/main-trading/Paymorz-Frontend-Rahul/src/pages/404.tsx
import React from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <button onClick={() => router.push("/")}>Go back home</button>
    </div>
  );
};

export default Custom404;