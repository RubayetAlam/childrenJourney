import { useEffect, useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SideMenuNavigations from '../lib/consts/navigations'

interface NavigationItem {
    key: string
    path: string
    label: string
    icons: JSX.Element
}

export default function SideMenu() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setMenuOpen(true)
            } else {
                setMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className={`flex flex-col bg-gray-50 ${menuOpen ? 'w-60' : 'w-12'} p-3 rounded-md`}>
            <button
                className="lg:hidden rounded-3xl border-none radio-button text-indigo-400 w-16"
                onClick={toggleMenu}
            >
                <FiMenu />
            </button>
            <div
                className={`flex flex-row p-2 w-${menuOpen ? '3/5' : 'full'} text-lg pb-6 items-center`}
                style={{ transform: `translateX(${menuOpen ? 0 : -320}px)` }}
            >
                {menuOpen && (
                    <button
                        className={`rounded-3xl border-none radio-button text-indigo-400 ${menuOpen ? '' : 'w-16'}`}
                    >
                        <BiUserCircle />
                    </button>
                )}
                {menuOpen && <span className="pl-2 text-indigo-400 font-medium">Welcome</span>}
            </div>
            {menuOpen && (
                <div>
                    {SideMenuNavigations.map((item) => (
                        <SideMenuLink key={item.key} item={item} />
                    ))}
                </div>
            )}
        </div>
    )
}

export function SideMenuLink({ item }: { item: NavigationItem }) {
    return (
        <Link
            to={item.path}
            className="transition ease-in-out delay-100 flex items-center gap-2 py-2 justify-between font-medium text-indigo-400 rounded-md hover:bg-indigo-300 hover:text-indigo-700 hover:scale-110 hover:-translate-y-1"
        >
            {item.label}
            <span className="text-xl">{item.icons}</span>
        </Link>
    )
}
