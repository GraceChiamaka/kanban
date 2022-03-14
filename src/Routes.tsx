import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { TaskDetails } from "./pages/Task";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
