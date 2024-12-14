import Link from "next/link";

export default function Navbar(props:{className?:string}) {
    let cl = "lg:text-2xl md:text-xl text-sm w-full py-2 text-center hover:bg-black hover:text-white duration-100";
    return (
        <div className={props.className+" flex"}>
            <Link href="/" className={cl}>Главная</Link>
            <Link href="/sem1" className={cl}>Первый семестр</Link>
            <Link href="/sem2" className={cl}>Второй семестр</Link>
            <Link href="/uslugi" className={cl}>Услуги</Link>
            <Link href="/auth" className={cl}>Авторизация</Link>
        </div>)
}