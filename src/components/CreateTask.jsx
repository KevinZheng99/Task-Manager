import { useState, useRef } from "react";

function CreateTask() {
  const boardTitleRef = useRef();
  const [boardTitle, setBoardTitle] = useState("");
  const [createNewBoard, setCreateNewBoard] = useState(false);

  function handleNewBoard() {
    setCreateNewBoard(!createNewBoard);
  }

  function handleCreate() {
    setBoardTitle(boardTitleRef.current.value);
  }

  return (
    <div className="flex gap-2">
      <button className="p-4 bg-slate-300 rounded-lg" onClick={handleNewBoard}>
        Create new board
      </button>
      {createNewBoard && (
        <div className="absolute flex flex-col p-4 bg-slate-300 rounded-lg">
          <label htmlFor="boardTitle">Board title</label>
          <input id="boardTitle" ref={boardTitleRef} />
          <button
            className="p-2 bg-slate-400 rounded mt-4"
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateTask;
