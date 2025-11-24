import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fsign-in-with-vercel-reference-app&env=NEXT_PUBLIC_CLIENT_ID,CLIENT_SECRET&envDescription=After%20you%20create%20the%20application%2C%20you%20can%20find%20the%20client%20ID%20in%20the%20App%20settings%20page%2C%20and%20you%20will%20need%20to%20generate%20a%20client%20secret%20under%20the%20Authentication%20tab."
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
