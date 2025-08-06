import { LightningElement,api } from 'lwc';
import updateTodo from '@salesforce/apex/ToDoController.updateTodo';
import deleteTodo from '@salesforce/apex/ToDoController.deleteTodo';

export default class ToDoItem extends LightningElement {
    @api todoId;
    @api todoName;
    @api done = false;

    updateHandler(){
        const todo = {
            todoId: this.todoId,
            todoName: this.todoName,
            done : !this.done
        };

        updateTodo({payload: JSON.stringify(todo)})
        .then(result => {
        //on successful update, fire an event to notify parent component
        const updateEvent = new CustomEvent("update", { detail: todo });
        this.dispatchEvent(updateEvent);
         })
        .catch(error => {
            console.error("Error in update",error);
        });

    }

    deleteHandler(){
        deleteTodo({todoId: this.todoId}).then(result => {
        //on successful delete, fire an event to notify parent component
        this.dispatchEvent(new CustomEvent("delete", { detail: this.todoId }));

        }).catch(error => {
            console.error("Error in delete",error);
        })

    }
      // get property to return icon name based on item state
  // for completed item, return check icon, else return add icon
  get buttonIcon() {
    return this.done ? "utility:check" : "utility:add";
  }

    get containerClass(){
        //todo is the class name in below
        return this.done? "todo completed": "todo upcoming"
    }

    get iconName(){
        return this.done ? "utility:check " : "utility:add";
    }

}