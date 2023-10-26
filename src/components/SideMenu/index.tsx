import { useState } from 'react'
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

    return (
        <div className={`flex flex-col bg-gray-50 ${menuOpen ? 'w-60' : 'w-16'} p-3 rounded-md`}>
            <section className="lg:hidden">
                <button className="rounded-3xl border-none radio-button text-indigo-400 w-16" onClick={toggleMenu}>
                    <FiMenu />
                </button>
                <div className={`flex flex-row p-2 w-${menuOpen ? '3/5' : 'full'} text-lg pb-6 items-center`}>
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
            </section>
            <div className={`lg:flex flex-row p-2 w-${menuOpen ? '3/5' : 'full'} text-lg pb-6 items-center`}>
                <button
                    className={`rounded-3xl border-none radio-button text-indigo-400 ${menuOpen ? '' : 'w-16'}`}
                    onClick={toggleMenu}
                >
                    <BiUserCircle />
                </button>

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
            className="flex items-center gap-2 py-2 justify-between font-medium text-indigo-400 hover:bg-indigo-300 hover:text-indigo-700 hover:rounded-md hover:p-2"
        >
            {item.label}
            <span className="text-xl">{item.icons}</span>
        </Link>
    )
}
