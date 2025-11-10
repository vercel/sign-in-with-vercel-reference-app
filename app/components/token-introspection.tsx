"use client";

import { useState } from "react";

interface ValidationResponse {
  message: string;
  tokenInfo: {
    active: boolean;
    clientId?: string;
    tokenType?: string;
    subject?: string;
    issuer?: string;
    tokenId?: string;
    sessionId?: string;
    expiresAt?: number;
    issuedAt?: number;
  };
}

export default function TokenIntrospection() {
  const [validationData, setValidationData] =
    useState<ValidationResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleValidateToken = async () => {
    setLoading(true);
    setError(null);
    setValidationData(null);

    try {
      const response = await fetch("/api/validate-token");

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      setValidationData(data as ValidationResponse);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const formatTimestamp = (timestamp?: number) => {
    if (!timestamp) return "N/A";
    return new Date(timestamp * 1000).toLocaleString();
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Token Introspection</h2>
      <p className="mt-2 text-sm">
        Validate your access token using Vercel&apos;s token introspection
        endpoint.
      </p>

      <button
        onClick={handleValidateToken}
        disabled={loading}
        className={`mt-4 px-4 py-2 rounded-lg border ${
          loading
            ? "opacity-60 cursor-not-allowed"
            : "cursor-pointer hover:opacity-80"
        }`}
      >
        {loading ? "Validating Token..." : "Validate Token"}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">Error: {error}</p>
        </div>
      )}

      {validationData && (
        <div className="mt-4 p-4 border rounded-lg">
          <h3 className="font-semibold mb-2 text-green-800">
            ✓ {validationData.message}
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <strong>Token Active:</strong>{" "}
              <span className="text-green-600">
                {validationData.tokenInfo.active ? "Yes" : "No"}
              </span>
            </div>

            {validationData.tokenInfo.active && (
              <>
                <div>
                  <strong>Client ID:</strong>{" "}
                  {validationData.tokenInfo.clientId || "N/A"}
                </div>
                <div>
                  <strong>Token Type:</strong>{" "}
                  {validationData.tokenInfo.tokenType || "N/A"}
                </div>
                <div>
                  <strong>Subject (User ID):</strong>{" "}
                  {validationData.tokenInfo.subject || "N/A"}
                </div>
                <div>
                  <strong>Issuer:</strong>{" "}
                  {validationData.tokenInfo.issuer || "N/A"}
                </div>
                <div>
                  <strong>Token ID (JTI):</strong>{" "}
                  {validationData.tokenInfo.tokenId || "N/A"}
                </div>
                <div>
                  <strong>Session ID:</strong>{" "}
                  {validationData.tokenInfo.sessionId || "N/A"}
                </div>
                <div>
                  <strong>Issued At:</strong>{" "}
                  {formatTimestamp(validationData.tokenInfo.issuedAt)}
                </div>
                <div>
                  <strong>Expires At:</strong>{" "}
                  {formatTimestamp(validationData.tokenInfo.expiresAt)}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
