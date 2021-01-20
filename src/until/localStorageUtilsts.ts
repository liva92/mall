import { Todo } from './../type/type';

export function saveTodos(todos:Todo[]){
localStorage.setItem('todos_key',JSON.stringify(todos))
}
export function readTodos(){
   return JSON.parse(localStorage.getItem('todos_key')||'[]') 
}