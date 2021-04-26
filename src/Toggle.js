
function Toggle ({items,remove}){
    console.log(items); 
    return(
<section className="main">
    <input className="toggle-all"
           type="checkbox"/>
    <ul className="todo-list">
        {items.map(item =>(          // want to map items to a li object . onClick needs to point on the function without calling the function
      <li>
        <div className="view">
          <input className="toggle"
                checked={item.completed}
                 type="checkbox"/>
          <label>{item.title}</label>
          {item.completed ?'completed':null}
          <button onClick={() => remove(item)} className="destroy"></button> 
          {console.log(item)}
        </div>
        <input className="edit"/>
      </li>))}
    </ul>
  </section>
    )
}
export default Toggle;