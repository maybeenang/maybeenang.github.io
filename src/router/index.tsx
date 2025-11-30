import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
