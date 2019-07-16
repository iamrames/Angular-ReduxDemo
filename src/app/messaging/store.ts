import { INCREMENT, DECREMENT } from './actions';
import { tassign } from 'tassign';


export interface IMessagingState {
    newMessages: number;
}

export const MESSAGING_INITIAL_STATE: IMessagingState = {
    newMessages: 0
};

class TodoActions {
    constructor(private state, private action) {}

    increment() {
        return tassign(this.state, { newMessages: this.state.newMessages + 1});
    }

    decrement() {
        if (this.state.newMessages <= 0) { return this.state; }
        return tassign(this.state, { newMessages: this.state.newMessages - 1});
    }
}

export function messagingReducer(state: IMessagingState = MESSAGING_INITIAL_STATE, action): IMessagingState {
    const actions = new TodoActions(state, action);
    switch (action.type) {
        case INCREMENT: return actions.increment();
        case DECREMENT: return actions.decrement();
    }
    return state;
}

