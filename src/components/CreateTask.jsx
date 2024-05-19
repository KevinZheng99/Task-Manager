import { useState, useRef } from "react";

function CreateTask() {
  const boardTitleRef = useRef();
  const [boards, setBoards] = useState([]);
  const [createNewBoard, setCreateNewBoard] = useState(false);

  function handleNewBoard() {
    setCreateNewBoard(!createNewBoard);
  }

  function handleCreate() {
    setBoards((pervBoards) => {
      return [...pervBoards, boardTitleRef.current.value];
    });
  }

  return (
    <div className="flex gap-2">
      {createNewBoard ? (
        <div className="flex flex-col p-4 bg-slate-300 rounded-lg">
          <label htmlFor="boardTitle">Board title</label>
          <input id="boardTitle" ref={boardTitleRef} />
          <button
            className="p-2 bg-slate-400 rounded mt-4"
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      ) : (
        <button
          className="p-4 bg-slate-300 rounded-lg"
          onClick={handleNewBoard}
        >
          Create new board
        </button>
      )}
      {boards.map((board) => (
        <div key={board} className="p-4 bg-slate-300">
          {board}
        </div>
      ))}
    </div>
  );
}

export default CreateTask;
