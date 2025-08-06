declare module "@salesforce/apex/Todolist.addTodo" {
  export default function addTodo(param: {payload: any}): Promise<any>;
}
declare module "@salesforce/apex/Todolist.updateTodo" {
  export default function updateTodo(param: {payload: any}): Promise<any>;
}
declare module "@salesforce/apex/Todolist.deleteTodo" {
  export default function deleteTodo(param: {todoId: any}): Promise<any>;
}
declare module "@salesforce/apex/Todolist.getAllTodos" {
  export default function getAllTodos(): Promise<any>;
}
declare module "@salesforce/apex/Todolist.getCurrentTodos" {
  export default function getCurrentTodos(): Promise<any>;
}
