import { Route, Routes } from "react-router-dom";
import Admin from "../LayoutComponents/Admin";
import Banner from "../LayoutComponents/Banner";
import Blog from "../LayoutComponents/Blog";
import Category from "../LayoutComponents/Category";
import Course from "../LayoutComponents/Course";
import Dashboard from "../LayoutComponents/Dashboard";
import Payment from "../LayoutComponents/Payment";
import Permission from "../LayoutComponents/Permission";
import Subscription from "../LayoutComponents/Subscription";
import Team from "../LayoutComponents/Team";
import Training from "../LayoutComponents/Training";
import User from "../LayoutComponents/User";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/banner" element={<Banner />} />
      <Route path="/training" element={<Training />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/permission" element={<Permission />} />
      <Route path="/user" element={<User />} />
      <Route path="/category" element={<Category />} />
      <Route path="/course" element={<Course />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
      <Route path="/subscription" element={<Subscription />} />
    </Routes>
  );
}
