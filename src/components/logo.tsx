import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/WhatsApp Image 2026-04-12 at 9.08.37 PM.svg"
      alt="PODEVS Logo"
      width={110}
      height={44}
      priority
      style={{ objectFit: "contain", height: 44, width: "auto", mixBlendMode: "screen" }}
    />
  );
}
