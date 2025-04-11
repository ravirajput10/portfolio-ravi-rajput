import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Portfolio Ravi Rajput</h1>
      <Image src="/window.svg" alt="window" width={100} height={100} />
    </div>
  );
}
