import { BiUserCircle } from 'react-icons/Bi'
import { Link } from 'react-router-dom'
import SideMenuNavigations from '../lib/consts/navigations'
export default function SideMenu() {
    return (
        <div className="flex flex-col bg-gray-50 w-60 p-3 rounded-md">
            <div className="flex flex-row p-2 w-3/5  text-lg pb-6 items-center">
                <button className="rounded-3xl border-none radio-button text-indigo-400">
                    <BiUserCircle />
                </button>
                <span className="pl-2 text-indigo-400 font-medium">Welcome</span>
            </div>
            <div>
                {SideMenuNavigations.map((item) => (
                    <SideMenuLink key={item.key} item={item} />
                ))}
            </div>
        </div>
    )
}
export function SideMenuLink({ item }) {
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
