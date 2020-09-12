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
		<div className="d-flex flex-wrap justify-content-center text-center">
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
					ContactBook is empty 😔. <strong>Add a new contact</strong>
				</p>
			)}
		</div>
	);
};

export default ContactList;
