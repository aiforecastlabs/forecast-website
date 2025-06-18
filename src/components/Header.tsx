import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-300">
      <div className="navbar-start">
        <Link
          href="/"
          className="btn btn-ghost text-2xl font-bold flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="Forecast Labs Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          Forecast Labs
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/" className="btn btn-ghost">
          Home
        </Link>
        <Link href="/results" className="btn btn-ghost hidden sm:flex">
          Results &amp; Methodology
        </Link>
      </div>
    </div>
  );
}
