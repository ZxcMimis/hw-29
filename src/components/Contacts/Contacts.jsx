import "./Contacts.scss";

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <>
      <h2 className="subtitle">Contacts</h2>
      <ul className="list">
        {contacts.map((contact) => (
          <li className="item" key={contact.id}>
            <p className="text">
              {contact.name}: {contact.phone}
            </p>
            <button
              className="delete"
              onClick={() => deleteContact(contact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};