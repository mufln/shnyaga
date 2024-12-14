'use client'
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useRef} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Side from "@/app/main/ui/side";
import Bayan from "@/app/main/ui/bayan";
import Coreinfo from "@/app/main/ui/coreinfo";

export default function Main() {
    const router = useRouter();
    return (
        <div className={"flex flex-row"}>
            <Side />
            <div className="w-full mx-4">
                <Coreinfo />
                <Bayan />
            </div>
        </div>
    )
}