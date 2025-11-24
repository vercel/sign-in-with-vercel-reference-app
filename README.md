# Sign in with Vercel - Reference app

A Next.js app that demonstrates how to integrate [Sign in with Vercel](https://vercel.com/docs/integrations/sign-in-with-vercel) into your application.

Try it out at: [https://sign-in-with-vercel-reference-app.vercel.app](https://sign-in-with-vercel-reference-app.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fsign-in-with-vercel-reference-app&env=NEXT_PUBLIC_CLIENT_ID,CLIENT_SECRET&envDescription=After%20you%20create%20the%20application%2C%20you%20can%20find%20the%20client%20ID%20in%20the%20App%20settings%20page%2C%20and%20you%20will%20need%20to%20generate%20a%20client%20secret%20under%20the%20Authentication%20tab.)

## Getting Started

Before running the app locally, make sure to first create a Vercel application in the Dashboard by navigating to Team Settings page → Apps → Create.

After you provide the basic app information, you’ll be redirected to the Manage page.

While filling out the form, under **Authorization Callback URLs**, make sure to add the following custom domain:

```bash
http://localhost:3000/api/auth/callback
```

In the Authentication page, generate a Client Secret, and then add it along with the Client ID to the `.env.local` file in the root directory of the project:

```bash
NEXT_PUBLIC_CLIENT_ID=""
CLIENT_SECRET=""
```

Additionally, under the **Permissions** page, you’ll need to assign the following scopes and permissions. These are required to display information about the logged-in user on the `/profile` page.

![Permissions](images/permissions.png)

## Running the Development Server

Start the development server using your preferred package manager:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to view the demo application.
