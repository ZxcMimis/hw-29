import { ADD_CONTACT, REMOVE_CONTACT } from "./type";

export const addContact = (contact) => {
    return {type: ADD_CONTACT, payload: contact}
}

export const removeContact = (id) => {
    return {type: REMOVE_CONTACT, payload: id}
}