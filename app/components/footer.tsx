import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fsign-in-with-vercel-reference-app&env=NEXT_PUBLIC_VERCEL_APP_CLIENT_ID,VERCEL_APP_CLIENT_SECRET&envDescription=Before%20you%20deploy%2C%20create%20an%20app%20and%20generate%20a%20client%20secret.%20Paste%20the%20client%20ID%20and%20client%20secret%20above%2C%20deploy%20the%20app%2C%20and%20then%20go%20back%20and%20register%20the%20project's%20authorization%20callback%20URL%20for%20the%20app%20(%2Fapi%2Fauth%2Fcallback).&envLink=https%3A%2F%2Fgithub.com%2Fvercel%2Fsign-in-with-vercel-reference-app%3Ftab%3Dreadme-ov-file%23getting-started&project-name=sign-in-with-vercel-reference-app&repository-name=sign-in-with-vercel-reference-app&demo-title=Sign%20in%20with%20Vercel%20-%20Reference%20App&demo-description=A%20Next.js%20app%20that%20demonstrates%20how%20to%20integrate%20Sign%20in%20with%20Vercel%20into%20your%20application.&demo-url=https%3A%2F%2Fsign-in-with-vercel-reference-app.vercel.app&demo-image=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fcontentful%2Fimage%2Fe5382hct74si%2F5G86ND5yAeQoCg4BlOjjOw%2F9562695fceeef60033ceabc81cc22896%2FSign_in_with_Vercel.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://vercel.com/button"
              alt="Deploy with Vercel"
              width={104}
              height={32}
              unoptimized
            />
          </a>
          <p className="text-xs text-gray-500 mt-2">
            © {new Date().getFullYear()} Vercel, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
