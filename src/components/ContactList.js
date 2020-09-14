import React, { useEffect } from "react";
import Contact from "./Contact";
import { fetchURL } from "../helpers/helpers";

const ContactList = ({ contacts, setContacts, handleUpdate, handleDelete }) => {
	useEffect(() => {
		try {
			(async () => {
				const api = await fetchURL(
					"https://contactbook-app-v2.herokuapp.com/api/v1/contacts"
				);
				const data = await api.json();

				setContacts(data);
			})();
		} catch (error) {
			console.log(error);
		}
	}, [setContacts]);

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
					<p className="animate__animated animate__pulse animate__infinite infinite">
						ContactBook is empty <span role="img" aria-label="emoticon">😔</span>.
						<br />
						<strong>Add a new contact</strong>
					</p>
				</div>
			)}
		</div>
	);
};

export default ContactList;