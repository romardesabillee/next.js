import Badge from '../components/Badge';
import Link from "next/link";

export default function Home() {

  const string = 'Hello World'

  function myFunction() {
    return <h1>Test</h1>;
  }

  const todos = [
    { task: 'Do task 1', status: 'In-Progress' },
    { task: 'Fix bugs', status: 'Done' },
    { task: 'Create new project', status: 'Todo' }
  ]

  const data = ['Data 1', 'Data 2', 'Data 3'];

  function handleOnClick() {
    const element = document.querySelector('.button');
    if (element.style.background == 'red') {
      element.style.background = null;
    } else {
      element.style.background = 'red';
    }
  }

  function handleInputChange(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <button 
        onClick={handleOnClick}
        className="button">
        Button
      </button>
      <br/>
      <input 
        onChange={handleInputChange}
        type="text" />

      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <div>
              {todo.task} 
              &nbsp;
              <Badge 
                text={todo.status}/>
            </div>
          </div>
        )
      })}

      {data.map((d, i) => {
        return (
          <div key={i}>{d}</div>
        )
      })}

      <Link href="/hooks">Hooks</Link>
    </div>
  )
}
