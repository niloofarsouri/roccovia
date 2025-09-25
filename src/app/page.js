import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen sm:p-20 overflow-y-hidden">

      {/* <div className="bg-green-950 text-[#957536] text-7xl">
        <h1>Roccovia</h1>
      </div> */}

      <div className="flex justify-center items-center">
        <Link href={'/'}>
          <Image
            src="/img/logo-crown and col.png"
            width={300}
            height={300}
            alt="Picture of the Logo"
          />

          <Image 
          src="/img/logo-png.png"
          width={300}
          height={300}
          alt="fuck"
          />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-1">
        <div className="border-1 p-2 col-span-2">col 1</div>
        <div className="border-1 p-2">col 2</div>
        <div className="border-1 p-2">col 3</div>
        <div className="border-1 p-2 col-span-2">col 4</div>
        <div className="border-1 p-2 col-span-2">col 5</div>
        <div className="border-1 p-2">col 6</div>
      </div>

      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}

    </div>
  );
}
