import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Fetch from "./pages/fetch";
import Msg from "./pages/msg";
import NoPage from "./pages/NoPage";
import ToDoList from "./pages/toDoList";
import ChatGpt from "./pages/chatGpt";
import RedText from "./pages/redText";
import ExcelRow from "./pages/excelRow";
import UnclickableButton from "./pages/unclickableButton";
import StringaRgb from "./pages/stringaRgb";
import Posizione from "./pages/posizione";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fetch" element={<Fetch />} />
          <Route path="msg" element={<Msg />} />
          <Route path="toDoList" element={<ToDoList />} />
          <Route path="chatGpt" element={<ChatGpt />} />
          <Route path="redText" element={<RedText />} />
          <Route path="excelRow" element={<ExcelRow />} />
          <Route path="unclickableButton" element={<UnclickableButton />} />
          <Route path="stringaRgb" element={<StringaRgb />} />
          <Route path="posizione" element={<Posizione />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
