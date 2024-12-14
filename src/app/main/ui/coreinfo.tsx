import Carouselle from "@/app/main/ui/carousel";

export default function Coreinfo() {
    let isRotating = false;
    async function rotate() {
        if (isRotating) return;
        isRotating = true;
        const pic = document.getElementById("pic") as HTMLImageElement;
        for (let i = 0; i < 360; i++) {
            pic.style.transform = "rotate(" + i + "deg)";
            await new Promise(r => setTimeout(r, 0.1));
        }
        isRotating = false;
    }
    return (
        <>
            <h1 className="text-2xl my-4">Обо мне</h1>
            <div className="flex flex-row items-center gap-10">
                Я профессианальный крудошлеп-формашлеп
                <img id="pic" onClick={() => rotate()} src="/Unknown" alt="logo" className="w-32"/>
            </div>
            <h1 className="text-2xl my-4">Фронтенд</h1>
            <div>
                Фронтенд это класc
            </div>
            <h1 className="text-2xl my-4">Бекенд</h1>
            <div className={"flex flex-row items-start gap-10"}>
                Бекенд это класc, вот пруфы
                <Carouselle />
            </div>
        </>
)
}