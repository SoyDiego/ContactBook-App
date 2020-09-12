import React, { useState } from "react";
import NewContact from "./NewContact";
import { showError, showMessage } from "../helpers/helpers";
import Swal from "sweetalert2";
import ContactList from "./ContactList";

const Main = () => {
	const [contacts, setContacts] = useState(null);

	const handleSubmit = async (e, firstName, lastName, email, phone) => {
		e.preventDefault();
		const resetForm = e.target;

		const newContact = JSON.stringify({
			contact: { firstName, lastName, email, phone },
		});
		try {
			const api = await fetch(
				"https://contactbook-app.herokuapp.com/api/v1/contacts.json",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: newContact,
				}
			);
			const data = await api.json();

			if (data.ok) {
				setContacts([...contacts, data.contacts]);
				resetForm.reset();
				showMessage("success", "Contact added successfully");
			} else {
				const errorValidations = [];
				for (const key in data.errors) {
					errorValidations.push(data.errors[key][0]);
				}
				showMessage(
					"error",
					errorValidations
						.map((errorValidation) => errorValidation)
						.join("<br/>")
				);
			}
		} catch (error) {
			showError();
			console.log(error);
		}
	};

	const handleDelete = async (id) => {
		const result = await Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		});
		if (result.isConfirmed) {
			try {
				await fetch(
					`https://contactbook-app.herokuapp.com/api/v1/contacts/${id}`,
					{
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				const filteredContacts = contacts.filter(
					(contact) => contact.id !== id
				);
				setContacts(filteredContacts);

				showMessage("success", "Deleted successfully");
			} catch (error) {
				showError();
				console.log(error);
			}
		}
	};

	const handleUpdate = async (contact) => {
		try {
			const api = await fetch(
				`https://contactbook-app.herokuapp.com/api/v1/contacts/${contact.id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ contact: contact }),
				}
			);
			let newContacts = contacts.map((iterateContact) =>
				iterateContact.id === contact.id ? contact : iterateContact
			);
			const data = await api.json();

			if (data.ok) {
				setContacts(newContacts);
				showMessage("success", "Updated successfully");
				return true;
			} else {
				const errorValidations = [];
				for (const key in data.errors) {
					errorValidations.push(data.errors[key][0]);
				}
				showMessage(
					"error",
					errorValidations
						.map((errorValidation) => errorValidation)
						.join("<br/>")
				);
				return false;
			}
		} catch (error) {
			showError();
			console.log(error);
			return false;
		}
	};

	return (
		<div className="container-fluid mt-5">
			<div className="row justify-content-center">
				<div className="col-md-4 d-flex flex-column align-items-center justify-content-center text-center">
					<h2>Add Contact</h2>
					<NewContact handleSubmit={handleSubmit} />
				</div>
				<div className="col-md-8 d-flex flex-column text-center">
					<h2>ContactBook-App</h2>
					<ContactList
						contacts={contacts}
						setContacts={setContacts}
						handleUpdate={handleUpdate}
						handleDelete={handleDelete}
					/>
				</div>
			</div>
		</div>
	);
};

export default Main;
