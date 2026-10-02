import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import Kanban from "./components/Kanban"
import { boardList } from "./components/Boards.ts";
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard boards={boardList.map(board => board.board)} />} />
        {boardList && boardList.map(board => (
          <Route path={`/Dashboard/${board.board.id}`} element={<Kanban project={board} />} />
        ))}
      </Routes>
    </>
  )
}

export default App
