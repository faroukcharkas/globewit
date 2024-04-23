import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TextQuestion() {
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
      <CardContent className="text-center">
        <h1 className="text-2xl">What&apos;s the name of this country?</h1>
        <p className="text-lg text-gray-400">Type your answer below</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <p className="text-start w-full text-sm">Country Name</p>
        <Input placeholder="e.g. Germany" className="mb-5" />
        <Button className="w-full">Finalize Answer</Button>
      </CardFooter>
    </Card>
  );
}
