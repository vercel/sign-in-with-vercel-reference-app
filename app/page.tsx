"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-0 flex-1">
      <main>
        <a href="/api/auth/authorize">
          <button
            type="button"
            disabled={loading}
            onClick={() => setLoading(true)}
            className={`flex items-center justify-center p-3 rounded-lg border bg-black text-white text-md focus:outline-hidden focus:ring-0 ${
              loading
                ? "opacity-60 cursor-not-allowed"
                : "cursor-pointer hover:opacity-80"
            }`}
          >
            <Image
              alt="Vercel Logo"
              src="/vercel.svg"
              width={20}
              height={20}
              className="mr-2"
              loading="eager"
            />
            {loading ? "Signing in with Vercel..." : "Sign in with Vercel"}
          </button>
        </a>
      </main>
    </div>
  );
}
