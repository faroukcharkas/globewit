"use client";
import { Progress } from "@/components/ui/progress";
import Logo from "../../../public/GlobeWit.svg";

import Image from "next/image";
import TextQuestion from "@/components/text-question";
import SelectQuestion from "@/components/select-question";
import NumberQuestion from "@/components/number-question";
import { useEffect, useState } from "react";
import { getWitquiz } from "@/utils/witquiz";
import { Skeleton } from "@/components/ui/skeleton";

export default function Game() {
  const [countries, setCountries] = useState<
    {
      commonName: string;
      officialName: string;
      capital: string;
      flag: string;
      temperature: number;
    }[]
  >([]);
  const [currentCountry, setCurrentCountry] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  function renderGame() {
    return (
      <>
        <div className="w-full mb-[102px]">
          <p>Progress</p>
          <Progress value={50} />
        </div>
        <NumberQuestion />
      </>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWitquiz();
      setCountries(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main className="flex-col flex min-h-screen bg-black">
      <div className="h-[64px] flex-0 border-b-[1px] border-b-gray-600 py-[10px] flex ">
        <div className="flex-1"></div>
        <div className="flex-1">
          <Image
            src={Logo}
            alt="GlobeWit logo"
            className="max-h-[40px] w-full"
          />
        </div>
        <div className="flex-1 flex items-center">
          <p className="text-white w-full text-end px-[20px]">{score} points</p>
        </div>
      </div>
      <div className="flex-1 noise bg-black px-[25%] pt-[16px]">
        {isLoading ? (
          <Skeleton className="w-full h-[400px]"></Skeleton>
        ) : (
          renderGame()
        )}
      </div>
    </main>
  );
}
