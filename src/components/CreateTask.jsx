import { useState } from "react";

function CreateTask() {
  const [isCreate, setIsCreate] = useState(false);

  function handleCreate() {
    setIsCreate(!isCreate);
  }

  return (
    <div className="flex gap-2">
      <button className="p-4 bg-slate-300 rounded-lg" onClick={handleCreate}>
        CreateTask +
      </button>
      {isCreate && (
        <div className="flex flex-col p-4 bg-slate-300 rounded-lg">
          <input />
          <button>Create</button>
        </div>
      )}
    </div>
  );
}

export default CreateTask;
