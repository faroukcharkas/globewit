"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function TextQuestion({
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
    <Card>
      <CardHeader className="flex items-center">
        <div className="w-[200px] mt-[-80px] border-gray-600 border-[1px] rounded-2xl overflow-hidden">
          <Image src={flagUrl} width={200} height={120} alt={"Flag"}></Image>
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <h1 className="text-2xl">{question}</h1>
        <p className="text-lg text-gray-400">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <p className="text-start w-full text-sm">{label}</p>
        <Input
          placeholder={placeholder}
          className="mb-5"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button
          className="w-full"
          onClick={() => {
            onAnswer(value);
          }}
        >
          Finalize Answer
        </Button>
      </CardFooter>
    </Card>
  );
}
