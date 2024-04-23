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

export default function NumberQuestion() {
  return (
    <Card className="">
      <CardHeader className="flex items-center">
        <div className="w-[200px] mt-[-80px] border-gray-600 border-[1px] rounded-2xl overflow-hidden">
          <Image
            src="https://flagcdn.com/md.svg"
            width={200}
            height={120}
            alt={"Flag"}
          ></Image>
        </div>
      </CardHeader>
      <CardContent className="text-center flex flex-col items-center">
        <h1 className="text-2xl">What&apos;s the name of this country?</h1>
        <p className="text-lg text-gray-400 mb-5">Type your answer below</p>
        <InputOTP maxLength={2} className="mb-5">
          <InputOTPGroup>
            <InputOTPSlot index={0} className="text-2xl h-[80px] w-[80px]" />
            <InputOTPSlot index={1} className="text-2xl h-[80px] w-[80px]" />
          </InputOTPGroup>
        </InputOTP>
      </CardContent>
      <CardFooter className="flex-col flex gap-5">
        <Button className="w-full">Submit Answer</Button>
      </CardFooter>
    </Card>
  );
}
