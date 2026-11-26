import Image from "next/image";
import logo from "@/public/logo.svg";
import "./globals.css";

export default function loading() {
  return (
    <div className="flex items-center justify-center mt-65">
      <div className="blink">
        <Image
          className="m-auto mb-3"
          src={logo}
          alt="Unicar"
          width={50}
          height={50}
          priority
        />
        <p>Buckle up, we're vrooming to the next page...</p>
      </div>
    </div>
  );
}
