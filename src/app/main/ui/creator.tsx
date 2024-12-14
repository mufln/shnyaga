export default function Creator(props:{className?:string}) {
    return (
        <div className={props.className+""}>
            <div className="text-right lg:text-xl md:text-lg text-sm">Бондаренко Федор</div>
            <div className="text-right lg:text-xl md:text-lg text-sm">Группа ЭФБО-01-23</div>
        </div>)
}