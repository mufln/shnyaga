import OrderModal from "@/app/uslugi/ui/modal";

export default function Card({title, description, image}: { title: string, description: string, image: string }) {
    return (
        <div className=" flex-col border border-1 rounded p-4 md:w-96 w-64 items-center justify-center">
            <h1 className="text-xl mb-4 font-bold">{title}</h1>
            <img src={image} alt="image" className="w-full aspect-square max-w-96 object-cover"/>
            <p className="text-xl m-4">{description}</p>
            <OrderModal />
        </div>
    )
}