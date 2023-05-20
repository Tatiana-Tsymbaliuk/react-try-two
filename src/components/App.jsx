import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown/Dropdown';
import ColorPiker from 'components/ColorPiker/ColorPiker';
import { Component } from 'react';
import TodoList from './ToDoList/TodoList';

const colorPikerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F5185' }
];


export class App extends Component {
state={
todos: [
  {id: 'id-1', text: 'Выучить', completed:true},
  {id: 'id-2', text: 'Разобраться', completed:false},
  {id: 'id-3', text: 'Пережить', completed:true},
],
}

deleteTodo = todoId =>{
  this.setState(prevState =>({
    todos: prevState.todos.filter(todo=>todo.id !== todoId),
  }));
 
  
}
  render(){ 
    const {todos} = this.state;
    const totalTodoCount = todos.length
    const completedTodoCount = todos.reduce(
      (total, todo)=>(todo.completed ? total + 1 : total), 0,
    );
    return (<div>
      Состояние компонента
    

      <Counter />
      <Dropdown />
       <ColorPiker options={colorPikerOptions} />
       <div>
        <p>Общее количество{totalTodoCount}</p>
        <p>Количество выполненых{completedTodoCount}</p>
       </div>
       <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
    </div>)}
};
