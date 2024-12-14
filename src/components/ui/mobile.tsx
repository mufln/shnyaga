'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
    { name: 'Главная', href: '/main' },
    { name: 'Первый семестр', href: '/sem1' },
    { name: 'Второй семестр', href: '/sem2' },
    { name: 'Услуги', href: '/uslugi' },
    { name: 'Авторизация', href: '/main' },

]

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [])

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring"
                aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <nav>
                        <ul>
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}

