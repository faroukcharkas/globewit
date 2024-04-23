import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/GlobeWit.svg";

export default function Start() {
  return (
    <main className="flex min-h-screen flex-col items-center noise justify-center bg-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-1 flex-col items-center">
          <Image
            src="/GlobeWit.svg"
            alt="GlobeWit logo"
            width={200}
            height={200}
          />
        </div>
        <p className="mb-8">Think you know the globe? No you don&apos;t.</p>
        <Link href={"/game"}>
          <Button className="w-[150px]">Play</Button>
        </Link>
      </div>
    </main>
  );
}
