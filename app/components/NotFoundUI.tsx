import Link from "next/link";
import Image from "next/image";

export default function NotFoundUI({
  title,
  subtitle,
  link_text,
  link_href,
}: {
  title: string;
  subtitle: string;
  link_text: string;
  link_href: string;
}) {
  return (
    <main className="flex flex-col items-center justify-center gap-2 mt-10">
      <span className="mt-10 mb-5 text-7xl">
        <Image
          src="/logo.svg"
          alt="Unicar"
          width={70}
          height={20}
          className="logo"
        />
      </span>
      <h1 className="text-4xl font-semibold mb-5">{title}</h1>
      <p className="mb-5">{subtitle}</p>
      <Link
        href={link_href}
        className="border-2 border-green-500 px-3 py-3 rounded-lg text-green-500 font-semibold hover:bg-green-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
      >
        {link_text}
      </Link>
    </main>
  );
}
