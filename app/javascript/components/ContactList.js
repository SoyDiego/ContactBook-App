import React, { useEffect } from "react";
import Contact from "./Contact";

const ContactList = ({
	contacts,
	setContacts,
	handleUpdate,
	handleDelete,
	setEditable,
}) => {
	useEffect(() => {
		try {
			(async () => {
				const api = await fetch("/api/v1/contacts.json");
				const data = await api.json();

				setContacts(data);
			})();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<>
			{contacts && contacts.length > 0 ? (
				contacts.map((contact) => (
					<Contact
						key={contact.id}
						contact={contact}
						handleUpdate={handleUpdate}
						handleDelete={handleDelete}
						setEditable={setEditable}
					/>
				))
			) : (
				<p>
					ContactList is empty 😔. <strong>Add a new contact</strong>
				</p>
			)}
		</>
	);
};

export default ContactList;
