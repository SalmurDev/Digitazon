import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Fetch from "./pages/fetch";
import Msg from "./pages/msg";
import NoPage from "./pages/NoPage";
import ToDoList from "./pages/toDoList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fetch" element={<Fetch />} />
          <Route path="msg" element={<Msg />} />
          <Route path="toDoList" element={<ToDoList />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
