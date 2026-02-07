import { Contacts } from "../Contacts/Contacts";
import { addContact, removeContact } from "../../redux/Contacts/action";
import "./AddContacts.scss";
import { useDispatch, useSelector } from "react-redux";

export const AddContacts = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const editContacts = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name: name,
      phone: number,
      id: Date.now(),
    };
    dispatch(addContact(contact));
    form.reset();
  };

  const deleteContact = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <>
      <h1 className="title">PHONEBOOK</h1>
      <form className="form" onSubmit={editContacts}>
        <p className="name">Name</p>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="nameInput"
        />
        <p className="phone">Number</p>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="phoneInput"
        />
        <button type="submit" className="btn">
          Add Contact
        </button>
      </form>
      <Contacts contacts={contacts} deleteContact={deleteContact} />
    </>
  );
};