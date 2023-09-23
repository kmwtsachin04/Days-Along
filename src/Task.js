import Checkbox from "./Checkbox";
import {useState} from "react";

function Task({name,done,onToggle,onTrash,onRename}) {
  const [editMode,setEditMode] = useState(false);
  return (
    <div className={'task ' + (done?'done':'')}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      
      {!editMode && (
        <div className="task-name" onClick={() => setEditMode(prev => !prev)}>
          <span>{name}</span>
        </div>
      )}
      {editMode && (
        <form onSubmit={ev => {ev.preventDefault();setEditMode(false);}}>
          <input type="text" value={name}
                 onChange={ev => onRename(ev.target.value)} />
        </form>
      )}
      
      <button className="trash" onClick={onTrash}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
      </button>
    </div>
  );
}
export default  Task;