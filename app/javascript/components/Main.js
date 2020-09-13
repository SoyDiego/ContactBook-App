import React, { useState } from "react";

import NewContact from "./NewContact";
import ContactList from "./ContactList";
import { showError, showMessage } from "../helpers/helpers";

import Swal from "sweetalert2";
import "animate.css";

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
		<div className="container-fluid my-auto">
			<div className="row justify-content-center">
				<div className="col-md-3 p-0 d-flex flex-column text-center animate__animated animate__fadeInLeft">
					<div className="sticky-top centerLeftMenu bg-dark">
						<h2 className="text-white">Add Contact</h2>
						<NewContact handleSubmit={handleSubmit} />
					</div>
				</div>
				<div className="col-md-9 d-flex flex-column text-center my-auto animate__animated animate__fadeIn">
					<h2 className="my-3">ContactBook-App</h2>
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
