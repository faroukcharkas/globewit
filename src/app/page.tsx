import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/GlobeWit.svg";

export default function Start() {
  return (
    <main className="flex min-h-screen flex-col items-center noise justify-center bg-black">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center">
          <Image
            src="/GlobeWit.svg"
            alt="GlobeWit logo"
            width={200}
            height={200}
          />
        </div>
        <Link href={"/game"}>
          <Button>Play</Button>
        </Link>
      </div>
    </main>
  );
}
