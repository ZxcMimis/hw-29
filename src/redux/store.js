import { createStore, combineReducers } from 'redux'
import { reducer as contactsReducer } from './Contacts/reducer';
const rootReducer = combineReducers({
    contacts: contactsReducer
})

export const store = createStore(rootReducer);