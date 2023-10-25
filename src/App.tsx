import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components//LayoutComponents/Banner'
import Layout from './components/Layout'
import Admin from './components/LayoutComponents/Admin'
import Blog from './components/LayoutComponents/Blog'
import Category from './components/LayoutComponents/Category'
import Course from './components/LayoutComponents/Course'
import Dashboard from './components/LayoutComponents/Dashboard'
import Payment from './components/LayoutComponents/Payment'
import Permission from './components/LayoutComponents/Permission'
import Subscription from './components/LayoutComponents/Subscription'
import Team from './components/LayoutComponents/Team'
import Training from './components/LayoutComponents/Training'
import User from './components/LayoutComponents/User'
import Login from './components/Login'
import Test from './components/_Test_'
// import Header from './components/Header'
// import SideMenu from './components/SideMenu'
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="banner" element={<Banner />} />
                    <Route path="training" element={<Training />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="permission" element={<Permission />} />
                    <Route path="user" element={<User />} />
                    <Route path="category" element={<Category />} />
                    <Route path="course" element={<Course />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="team" element={<Team />} />
                    <Route path="subscription" element={<Subscription />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="test" element={<Test />} />
            </Routes>
            {/* <SideMenu />
            <Header />
            <Contents /> */}
        </div>
    )
}

export default App
