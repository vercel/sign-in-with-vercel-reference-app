import { cookies } from "next/headers";
import Link from "next/link";
import SignOut from "../components/sign-out";
import TokenIntrospection from "../components/token-introspection";

export default async function Profile() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  const result = await fetch("https://vercel.com/api/login/oauth/userinfo", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await result.json();

  if (!data) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-semibold">Error</h1>
        <p className="mt-4">
          An error occurred while trying to fetch your profile.
        </p>
        Go{" "}
        <Link className="underline" href="/">
          back to the home page
        </Link>{" "}
        and sign in again.
      </main>
    );
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-semibold">Profile</h1>
      <p className="mt-4">
        Welcome to your profile page <strong>{data.name}</strong>.
      </p>
      <div>
        <h2 className="text-xl font-semibold mt-8">User Details</h2>
        <ul className="mt-4">
          <li>
            <strong>Name:</strong> {data.name}
          </li>
          <li>
            <strong>Email:</strong> {data.email}
          </li>
          <li>
            <strong>Username:</strong> {data.preferred_username}
          </li>
        </ul>
      </div>
      <p className="mt-8">
        Access to the authorized application can be reviewed and revoked in your{" "}
        <Link
          target="_blank"
          href={`https://vercel.com/account/settings/sign-in-with-vercel/connection_${process.env.NEXT_PUBLIC_VERCEL_APP_CLIENT_ID}_${data.sub}`}
          className="underline"
        >
          Account Settings
        </Link>
        .
      </p>
      <TokenIntrospection />
      <SignOut />
    </main>
  );
}
