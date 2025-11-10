import { cookies } from "next/headers";

type IntrospectionResponse =
  | { active: false }
  | {
      active: true;
      client_id: string;
      token_type: "bearer";
      exp: number;
      iat: number;
      sub: string;
      iss: string;
      jti: string;
      session_id: string;
    };

interface OpenIDConfiguration {
  issuer: string;
  jwks_uri: string;
  subject_types_supported: string[];
  response_types_supported: string[];
  claims_supported: string[];
  id_token_signing_alg_values_supported: string[];
  scopes_supported: string[];
  authorization_endpoint: string;
  device_authorization_endpoint: string;
  token_endpoint: string;
  revocation_endpoint: string;
  userinfo_endpoint: string;
  code_challenge_methods_supported: string[];
  revocation_endpoint_auth_methods_supported: string[];
  token_endpoint_auth_methods_supported: string[];
  grant_types_supported: string[];
  introspection_endpoint: string;
  registration_endpoint: string;
}

let cachedConfig: OpenIDConfiguration | null = null;

export async function GET(): Promise<Response> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      return Response.json({ error: "No access token found" }, { status: 401 });
    }

    const introspectionEndpoint = await getIntrospectionEndpoint();

    const introspectResponse = await fetch(introspectionEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ token }),
    });

    if (!introspectResponse.ok) {
      return Response.json(
        { error: "Failed to introspect token" },
        { status: 500 }
      );
    }

    const introspectionData: IntrospectionResponse =
      await introspectResponse.json();

    if (!introspectionData.active) {
      return Response.json({ error: "Token is not active" }, { status: 401 });
    }

    return Response.json({
      message: "Token is valid!",
      tokenInfo: {
        active: introspectionData.active,
        clientId: introspectionData.client_id,
        tokenType: introspectionData.token_type,
        subject: introspectionData.sub,
        issuer: introspectionData.iss,
        tokenId: introspectionData.jti,
        sessionId: introspectionData.session_id,
        expiresAt: introspectionData.exp,
        issuedAt: introspectionData.iat,
      },
    });
  } catch (error) {
    console.error("Token validation error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

async function getOpenIDConfiguration(): Promise<OpenIDConfiguration> {
  if (cachedConfig) {
    return cachedConfig;
  }

  const response = await fetch(
    "https://vercel.com/.well-known/openid-configuration"
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch OpenID configuration: ${response.status}`);
  }

  cachedConfig = await response.json();
  return cachedConfig!;
}

async function getIntrospectionEndpoint(): Promise<string> {
  const config = await getOpenIDConfiguration();
  return config.introspection_endpoint;
}
