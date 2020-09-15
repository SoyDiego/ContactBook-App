import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import { fetchURL, showError } from "../helpers/helpers";
import { Loading } from "./Loading";

const ContactList = ({ contacts, setContacts, handleUpdate, handleDelete }) => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		try {
			setIsLoading(true);
			(async () => {
				const api = await fetchURL(
					`${process.env.REACT_APP_API_URL}/api/v1/contacts`
				);
				const data = await api.json();

				setContacts(data);
			})();
		} catch (error) {
			showError();
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [setContacts]);

	if (isLoading) {
		return <Loading />;
	}

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
						ContactBook is empty{" "}
						<span role="img" aria-label="emoticon">
							😔
						</span>
						.
						<br />
						<strong>Add a new contact</strong>
					</p>
				</div>
			)}
		</div>
	);
};

export default ContactList;
