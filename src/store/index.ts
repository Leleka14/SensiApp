import {itemsReducer} from './reducers/itemsReducer';
import {createStore, combineReducers} from 'redux';
export const rootReducer = combineReducers({
  itemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
