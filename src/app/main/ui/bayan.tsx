import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Bayan() {
    return(<div className="max-w-2xl mx-auto my-4">
        <h1>FAQ</h1>
        <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
                <AccordionTrigger>Кто такой крудошлеп?</AccordionTrigger>
                <AccordionContent>
                    Человек, который пишет КРУДы.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Кто такой формашлеп?</AccordionTrigger>
                <AccordionContent>
                    Человек, который делает Формы.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Здесь есть анимации?</AccordionTrigger>
                <AccordionContent>
                    Да, если нажать на Гейба, он будет крутиться.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>)
}