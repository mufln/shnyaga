import Card from "@/app/uslugi/ui/card";

export default function Uslugi() {
    return (
        <>
            <h1 className="text-4xl mx-auto w-fit mb-8 mt-4 font-bold">Услуги</h1>
            <div className="w-full flex flex-wrap gap-4 items-center justify-center m-4">
                <Card title="Магазины" description="" image="img.png"/>
                <Card title="Сайты-визитки" description="" image="img_1.png"/>
                <Card title="Корпоративные сайты" description="" image="img_2.png"/>
            </div>
        </>
    )
}