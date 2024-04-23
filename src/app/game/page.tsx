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

  function renderQuestion(country: {
    commonName: any;
    officialName: string;
    capital: any;
    flag: any;
    temperature: number;
  }) {
    switch (currentQuestion) {
      case 0:
        return (
          <TextQuestion
            flagUrl={country.flag}
            question={"What is the name of this country?"}
            description={`Either common or official name`}
            label="Country Name"
            placeholder="e.g. Syria"
            onAnswer={(input) => {
              if (
                input.toLowerCase() === country.commonName.toLowerCase() ||
                input.toLowerCase() === country.officialName.toLowerCase()
              ) {
                setScore(score + 10);
              }
              setCurrentQuestion(currentQuestion + 1);
            }}
          />
        );
      case 1:
        return (
          <TextQuestion
            flagUrl={country.flag}
            question={"What is the capital of this country?"}
            description={`Type your answer below`}
            label="Capital City"
            placeholder="e.g. Damascus"
            onAnswer={(input) => {
              if (input.toLowerCase() === country.capital.toLowerCase()) {
                setScore(score + 10);
              }
              setCurrentQuestion(currentQuestion + 1);
            }}
          />
        );
      case 2:
        return (
          <NumberQuestion
            flagUrl={country.flag}
            question={"What is the temperature in the capital right now?"}
            description={`Enter in Fahrenheit`}
            label="Temperature"
            placeholder="e.g. 25"
            onAnswer={(input) => {
              console.log("Hi!");
              // Allow for a 5 degree margin of error
              console.log(parseInt(input));
              console.log(country.temperature);
              if (
                parseInt(input) >= country.temperature - 5 &&
                parseInt(input) <= country.temperature + 5
              ) {
                setScore(score + 10);
              }
              setCurrentQuestion(0);
              setCurrentCountry(currentCountry + 1);
            }}
          />
        );
    }
  }

  function renderGame() {
    return (
      <>
        <div className="w-full mb-[102px]">
          <p className="w-full text-center">Progress</p>
          <Progress
            value={Math.ceil(
              ((currentCountry + 1) * (currentQuestion + 1)) / 30
            )}
          />
        </div>
        {renderQuestion(countries[currentCountry])}
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
