import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [notes, setNotes] = useState({
    title:"",
    content:""
  });
  const [isExpanded, setIsExpanded] = useState(false);
  function handleChange(event){
    const {name, value} = event.target;
    setNotes(prevNotes => {
      return {...prevNotes,
        [name]:value}
    })
  }
  function handleClick(evt){
    setNotes({
      title:"",
      content:""
    })
    evt.preventDefault();
    props.onAdd(notes);

  }
  return (
    <div>
      <form className="create-note">
        {isExpanded ===true? <div><input onChange={handleChange} value={notes.title} name="title" placeholder="Title" />
        <Zoom in={true}>
        <Fab onClick={handleClick}><AddIcon/></Fab></Zoom></div> :null
        }
        <textarea onClick={() => {
         setIsExpanded(true);}} onChange={handleChange} value={notes.content} name="content" placeholder="Take a note..." rows={isExpanded? 3:1}/>
        
      </form>
    </div>
  );
}

export default CreateArea;
