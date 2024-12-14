'use client'
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function Side(props:{className?:string}) {
    const router = useRouter();
    return (<div className="flex flex-col items-start max-w-32">
        <Button onClick={() => router.push("")}
                className=" text-black hover:bg-black hover:text-white bg-white font-bold px-4 w-full border-none shadow-none rounded-none">
            Обо мне
        </Button>
        <Button onClick={() => router.push("")}
                className=" text-black hover:bg-black hover:text-white bg-white font-bold px-4 w-full border-none shadow-none rounded-none">
            Фронтенд
        </Button>
        <Button onClick={() => router.push("")}
                className=" text-black hover:bg-black hover:text-white bg-white font-bold px-4 w-full border-none shadow-none rounded-none">
            Бекенд
        </Button>
    </div>)
}