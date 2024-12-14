'use client'

import {useState} from 'react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {Checkbox} from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Calendar} from "@/components/ui/calendar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {CalendarIcon} from 'lucide-react'
import {format} from "date-fns"
import {cn} from "@/lib/utils"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"

export default function OrderModal() {
    const [date, setDate] = useState<Date>()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Оформить заказ</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Оформление заказа</DialogTitle>
                    <DialogDescription>
                        Пожалуйста, заполните все необходимые поля для оформления заказа.
                    </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Номер телефона</Label>
                        <Input id="phone" type="tel" pattern="+7[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" placeholder="+7 (999) 999-99-99" required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">ФИО</Label>
                        <Input id="name" placeholder="Иванов Иван Иванович" required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="country">Страна</Label>
                        <Select required>
                            <SelectTrigger id="country">
                                <SelectValue placeholder="Выберите страну"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="russia">Россия</SelectItem>
                                <SelectItem value="kazakhstan">Казахстан</SelectItem>
                                <SelectItem value="belarus">Беларусь</SelectItem>
                                {/* Добавьте другие страны по необходимости */}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="comment">Комментарий</Label>
                        <Textarea id="comment" placeholder="Введите ваш комментарий"/>
                    </div>
                    <div className="space-y-2">
                        <Label>Дата</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}>
                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                    {date ? format(date, "PPP") : <span>Выберите дату</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Почта</Label>
                        <Input id="email" type="email" placeholder="example@example.com" required/>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required/>
                        <Label htmlFor="terms" className="text-sm">
                            Я согласен на обработку персональных данных
                        </Label>
                    </div>
                    <Button type="submit" className="w-full">Отправить заказ</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

