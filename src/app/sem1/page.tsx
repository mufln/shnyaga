import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {Checkbox} from "@/components/ui/checkbox";


const lections = [
    {
        id: 1,
        theme: "Основы программирования",
        attendance: false,
    },
    {
        id: 2,
        theme: "Tailwind CSS",
        attendance: true,
    },
    {
        id: 3,
        theme: "Shadcn",
        attendance: true,
    },
    {
        id: 4,
        theme: "HTML",
        attendance: true,
    },
    {
        id: 5,
        theme: "CSS",
        attendance: true,
    },
    {
        id: 6,
        theme: "JavaScript",
        attendance: true,
    },
    {
        id: 7,
        theme: "React",
        attendance: true,
    },
    {
        id: 8,
        theme: "Next.js",
        attendance: true,
    },
];

const practices = [
    {
        id: 1,
        theme: "Основы программирования",
        attendance: true,
        acceptance: true,
    },
    {
        id: 2,
        theme: "Tailwind CSS",
        attendance: true,
        acceptance: false,
    },
    {
        id: 3,
        theme: "Shadcn",
        attendance: true,
        acceptance: true,
    },
    {
        id: 4,
        theme: "HTML",
        attendance: true,
        acceptance: true,
    },
    {
        id: 5,
        theme: "CSS",
        attendance: true,
        acceptance: true,
    },
    {
        id: 6,
        theme: "JavaScript",
        attendance: true,
        acceptance: true,
    },
    {
        id: 7,
        theme: "React",
        attendance: true,
        acceptance: true,
    },
    {
        id: 8,
        theme: "Next.js",
        attendance: true,
        acceptance: true,
    },
    {
        id: 9,
        theme: "Node.js",
        attendance: true,
        acceptance: true,
    },
    {
        id: 10,
        theme: "Express.js",
        attendance: true,
        acceptance: true,
    },
    {
        id: 11,
        theme: "MongoDB",
        attendance: true,
        acceptance: true,
    },
    {
        id: 12,
        theme: "PostgreSQL",
        attendance: true,
        acceptance: true,
    },
    {
        id: 13,
        theme: "Git",
        attendance: true,
        acceptance: true,
    },
    {
        id: 14,
        theme: "GitHub",
        attendance: true,
        acceptance: true,
    },
];

export default function Sem1() {
    return (
        <div className="my-10">

            <Table className="mx-auto w-1/3">
                <TableCaption>Список лекций</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Номер</TableHead>
                        <TableHead>Тема</TableHead>
                        <TableHead>Посещение</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {lections.map((lection) => (
                        <TableRow key={lection.id}>
                            <TableCell className="font-medium">{lection.id}</TableCell>
                            <TableCell>{lection.theme}</TableCell>
                            <TableCell><Checkbox defaultChecked={lection.attendance}/></TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Table className="mx-auto w-1/3">
                <TableCaption>Список Практик</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Номер</TableHead>
                        <TableHead>Тема</TableHead>
                        <TableHead>Посещение</TableHead>
                        <TableHead>Выполнение</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {practices.map((practice) => (
                        <TableRow key={practice.id}>
                            <TableCell className="font-medium">{practice.id}</TableCell>
                            <TableCell>{practice.theme}</TableCell>
                            <TableCell><Checkbox defaultChecked={practice.attendance}/></TableCell>
                            <TableCell><Checkbox defaultChecked={practice.acceptance}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="mx-auto w-fit my-10">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?display-text=%D0%A0%D0%BE%D1%81%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D0%B4%D0%B7%D0%BE%D1%80&ll=37.636662%2C55.751705&mode=search&oid=1092958629&ol=biz&sctx=ZAAAAAgBEAAaKAoSCWstzEI7hUNAEexRuB6Fw0tAEhIJebEwRE4fIkARHClbJO2mBkAiBgABAgMEBSgKOABAt54BSAFqAnJ1nQHNzMw9oAEAqAEAvQF74zFrwgEKpfOUiQSjt5miBIICGigoY2hhaW5faWQ6KDQwNDYxODE4MDkwKSkpigIAkgIAmgIMZGVza3RvcC1tYXBzqgILNDA0NjE4MTgwOTCwAgE%3D&sll=37.637555%2C55.751736&sspn=0.003572%2C0.001515&text=%7B%22text%22%3A%22%D0%A0%D0%BE%D1%81%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D0%B4%D0%B7%D0%BE%D1%80%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2240461818090%22%5D%7D%5D%7D&z=18.66"
                    width="560" height="400" frameBorder="1" style={{position: "relative"}}></iframe>
            </div>
        </div>
    )
}