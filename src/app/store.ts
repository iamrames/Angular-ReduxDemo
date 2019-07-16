import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from './messaging/store';
import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';
import { combineReducers } from 'redux';


export interface IAppState {
    tasking: ITaskingState;
    messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
    tasking: TASKING_INITIAL_STATE,
    messaging: MESSAGING_INITIAL_STATE
};

export const rootReducer = combineReducers({
    tasking: taskingReducer,
    messaging: messagingReducer
});

