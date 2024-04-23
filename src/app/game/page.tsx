import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Logo from "../../../public/GlobeWit.svg";

import Image from "next/image";
import TextQuestion from "@/components/text-question";
import SelectQuestion from "@/components/select-question";
import NumberQuestion from "@/components/number-question";

export default function Game() {
  return (
    <main className="flex-col flex min-h-screen bg-black">
      <div className="h-[64px] flex-0 border-b-[1px] border-b-gray-600 justify-center item-center py-[10px] ">
        <Image src={Logo} alt="GlobeWit logo" className="max-h-[40px] w-full" />
      </div>
      <div className="flex-1 noise bg-black px-[25%] pt-[16px]">
        <div className="w-full mb-[102px]">
          <p>Progress</p>
          <Progress value={50} />
        </div>
        <NumberQuestion />
      </div>
    </main>
  );
}
