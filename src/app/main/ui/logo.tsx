export default function Logo(props:{className?:string}) {
    return (
        <div className={props.className+" justify-items-center"}>
            <img src="/next.svg" className="aspect-square" alt="logo"/>
        </div>)
}