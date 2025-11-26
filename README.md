# Sign in with Vercel - Reference app

A Next.js app that demonstrates how to integrate [Sign in with Vercel](https://vercel.com/docs/integrations/sign-in-with-vercel) into your application.

Try it out at: [https://sign-in-with-vercel-reference-app.vercel.app](https://sign-in-with-vercel-reference-app.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fsign-in-with-vercel-reference-app&env=NEXT_PUBLIC_VERCEL_APP_CLIENT_ID,VERCEL_APP_CLIENT_SECRET&envDescription=Before%20you%20deploy%2C%20create%20an%20app%20and%20generate%20a%20client%20secret.%20Paste%20the%20client%20ID%20and%20client%20secret%20above%2C%20deploy%20the%20app%2C%20and%20then%20go%20back%20and%20register%20the%20project's%20authorization%20callback%20URL%20for%20the%20app%20(%2Fapi%2Fauth%2Fcallback).&envLink=https%3A%2F%2Fgithub.com%2Fvercel%2Fsign-in-with-vercel-reference-app%3Ftab%3Dreadme-ov-file%23getting-started&project-name=sign-in-with-vercel-reference-app&repository-name=sign-in-with-vercel-reference-app&demo-title=Sign%20in%20with%20Vercel%20-%20Reference%20App&demo-description=A%20Next.js%20app%20that%20demonstrates%20how%20to%20integrate%20Sign%20in%20with%20Vercel%20into%20your%20application.&demo-url=https%3A%2F%2Fsign-in-with-vercel-reference-app.vercel.app&demo-image=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fcontentful%2Fimage%2Fe5382hct74si%2F5G86ND5yAeQoCg4BlOjjOw%2F9562695fceeef60033ceabc81cc22896%2FSign_in_with_Vercel.jpg)

## Getting Started

Before running the app locally, make sure to first create a Vercel application in the Dashboard by navigating to [Team Settings page → Apps → Create](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fsettings%2Fapps%2Fcreate%3Futm_campaign%3Dgithub-readme&title=Create+an+App).

After you provide the basic app information, you’ll be redirected to the Manage page.

While filling out the form, under **Authorization Callback URLs**, make sure to add the following custom domain:

```bash
http://localhost:3000/api/auth/callback
```

You may also click "Add More" and select your project and allow `/api/auth/callback` for its preview and production deployments.  
Read more on [Manage authorization callback URLs from the dashboard](https://vercel.com/docs/sign-in-with-vercel/manage-from-dashboard#configure-the-authorization-callback-url).

In the Authentication page, generate a Client Secret, and then add it along with the Client ID to the `.env.local` file in the root directory of the project:

```bash
NEXT_PUBLIC_VERCEL_APP_CLIENT_ID=""
VERCEL_APP_CLIENT_SECRET=""
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
