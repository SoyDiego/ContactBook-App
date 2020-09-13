import React, { useEffect } from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, setContacts, handleUpdate, handleDelete }) => {
	useEffect(() => {
		try {
			(async () => {
				const api = await fetch(
					"https://contactbook-app.herokuapp.com/api/v1/contacts"
				);
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
					/>
				))
			) : (
				<div className="d-flex justify-content-center align-items-center">
					<p className="animate__animated animate__heartBeat">
						ContactBook is empty 😔.{" "}
						<strong>Add a new contact</strong>
					</p>
				</div>
			)}
		</div>
	);
};

export default ContactList;
