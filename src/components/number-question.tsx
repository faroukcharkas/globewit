"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function NumberQuestion({
  flagUrl,
  question,
  description,
  label,
  placeholder,
  onAnswer,
}: {
  flagUrl: string;
  question: string;
  description: string;
  label: string;
  placeholder: string;
  onAnswer: (input: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <Card className="">
      <CardHeader className="flex items-center">
        <div className="w-[200px] mt-[-80px] border-gray-600 border-[1px] rounded-2xl overflow-hidden">
          <Image src={flagUrl} width={200} height={120} alt={"Flag"}></Image>
        </div>
      </CardHeader>
      <CardContent className="text-center flex flex-col items-center">
        <h1 className="text-2xl">{question}</h1>
        <p className="text-lg text-gray-400 mb-5">{description}</p>
        <InputOTP
          maxLength={3}
          className="mb-5"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} className="text-2xl h-[80px] w-[80px]" />
            <InputOTPSlot index={1} className="text-2xl h-[80px] w-[80px]" />
            <InputOTPSlot index={2} className="text-2xl h-[80px] w-[80px]" />
          </InputOTPGroup>
        </InputOTP>
      </CardContent>
      <CardFooter className="flex-col flex gap-5">
        <Button
          className="w-full"
          onClick={() => {
            onAnswer(value);
          }}
        >
          Submit Answer
        </Button>
      </CardFooter>
    </Card>
  );
}
