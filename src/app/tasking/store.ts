import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, DELETEALL_TODO } from './actions';
import { tassign } from 'tassign';

export interface ITaskingState {
    todoList: any[];
    lastUpdate: Date;
}

export const TASKING_INITIAL_STATE: ITaskingState = {
    todoList: [],
    lastUpdate: null,
};

class TodoActions {
    constructor(private state, private action) {}

    addTodo() {
        const newTodo = { id: this.state.todoList.length + 1, title: this.action.title };
        return tassign(this.state, {
                todoList: this.state.todoList.concat(newTodo),
                lastUpdate: new Date()
            });
    }

    toggleTodo() {
        const todo = this.state.todoList.find(t => t.id === this.action.id);
        const index = this.state.todoList.indexOf(todo);

        return tassign(this.state, {
            todoList: [
                ...this.state.todoList.slice(0, index),
                // tslint:disable-next-line: no-string-literal
                tassign(todo, { isCompleted: !todo.isCompleted }),
                ...this.state.todoList.slice(index + 1)
            ],
            lastUpdate: new Date()
        });
    }

    deleteAllTodo() {
        return tassign(this.state, {
            todoList: [],
            lastUpdate: new Date()
        });
    }

    deleteTodo() {
        return tassign(this.state, {
            todoList: this.state.todoList.filter(t => t.id !== this.action.id),
            lastUpdate: new Date()
        });
    }
}

export function taskingReducer(state: ITaskingState = TASKING_INITIAL_STATE, action): ITaskingState {
    const actions = new TodoActions(state, action);
    switch (action.type) {
        case ADD_TODO: return actions.addTodo();
        case TOGGLE_TODO: return actions.toggleTodo();
        case DELETE_TODO: return actions.deleteTodo();
        case DELETEALL_TODO: return actions.deleteAllTodo();
    }
    return state;
}

