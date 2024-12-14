import Link from "next/link";

export default function Footer(props:{className?:string}) {
    return (
        <div className={props.className+" flex justify-center m-2"}>
            <div className="text-center flex items-center w-full">
                <p className="m-auto text-sm text-gray-500 dark:text-gray-400">
                    @ Бондаренко Федор Андреевич, 2024
                </p>
                <div className="gap-2 flex ">
                <Link href="https://t.me/mc_mufln" className=" text-sm text-gray-500 dark:text-gray-400">
                    <img src="/tg.svg" alt="telegram" className="w-8 h-8"/>
                </Link>
                <Link href="https://rkn.gov.ru" className=" text-sm text-gray-500 dark:text-gray-400">
                    <img src="/discord.svg" alt="discord" className="w-8 h-8"/>
                </Link>
                </div>
            </div>
        </div>)
}