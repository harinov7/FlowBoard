import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import Kanban from "./components/Kanban"
import { boardList, boards } from "./components/Boards.ts";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard boards={boardList.map(board => board.board)} />} />
        {boardList && boardList.map((board, i) => (
          <Route path={`/${boards[i].id}`} element={<Kanban project={board} />} />
        ))}
      </Routes>
    </>
  )
}

export default App
