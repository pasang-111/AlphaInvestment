import Image from "next/image";

export default function Logo({ height = 200 }: { height?: number }) {
  return (
    <Image
      src="/alpha-logo.png"
      alt="Alpha Investment"
      width={height * 4}
      height={height}
      priority
      style={{ height, width: "auto" }}
    />
  );
}