import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/GlobeWit.svg";

export default function Start() {
  return (
    <main className="flex min-h-screen flex-col items-center noise justify-center bg-black">
      <div className="flex w-full h-full">
        <div className="flex-1">&nbsp;</div>
        <div className="flex flex-1 flex-col items-center">
          <Image
            src="/GlobeWit.svg"
            alt="GlobeWit logo"
            width={200}
            height={200}
          />
        </div>
        <div className="flex-1"></div>
        <Link href={"/game"}>
          <Button>Play</Button>
        </Link>
      </div>
    </main>
  );
}
