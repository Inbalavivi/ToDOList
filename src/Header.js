

function Header ({title, addItem}){ //holds the input. how to pass Header the function addNewItem.
    //console.log(obj);
    function handleEnter(event){ //we get the event here
        if(event.code==='Enter'){
            addItem(event.target.value)
        }
    }
    return(
        <header className="header">
        <h1>{title}</h1>
        <input className="new-todo"     //need to understand- what type of event is enter? onKeyDown
               onKeyDown={handleEnter} //want to make sure its enter and to take the value from the input 
               placeholder="What needs to be done?"
               autofocus/>
      </header>
    )
    }
    export default Header;
