"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignOut() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signOut = async () => {
    setLoading(true);
    setError(null);

    const res = await fetch("/api/auth/signout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/");
    } else {
      console.error("Failed to sign out", await res.json());
      setError("Failed to sign out");
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <button
        type="button"
        disabled={loading}
        onClick={() => signOut()}
        className={`p-2 mt-5 rounded-lg bg-black border text-white text-md focus:outline-hidden focus:ring-0 ${
          loading
            ? "opacity-60 cursor-not-allowed"
            : "cursor-pointer hover:opacity-80"
        }`}
      >
        {loading ? "Signing out..." : "Sign out"}
      </button>

      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}
