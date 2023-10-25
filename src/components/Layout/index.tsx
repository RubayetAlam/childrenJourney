import { Outlet } from 'react-router-dom'
import Header from '../Header'
import SideMenu from '../SideMenu'
export default function Layout() {
    return (
        <div>
            <div className="flex flex-row bg-zinc-200 h-screen w-screen overflow-auto p-3">
                <SideMenu />
                <div className="px-3 w-full">
                    <Header />
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}
