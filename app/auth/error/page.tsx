import Link from "next/link";

export default function AuthError() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-semibold">Error</h1>
      <p className="mt-4">
        An error occurred while trying to authenticate you.
      </p>
      Go{" "}
      <Link className="underline" href="/">
        back to the home page
      </Link>{" "}
      and sign in again.
    </main>
  );
}
