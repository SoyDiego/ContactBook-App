import React, { useState } from "react";

const Contact = ({ contact, handleUpdate, handleDelete }) => {
	const [editable, setEditable] = useState(false);
	let firstName = editable ? (
		<input
			className="form-control m-2"
			type="text"
			ref={(input) => (firstName = input)}
			defaultValue={contact.firstName}
		/>
	) : (
		contact.firstName
	);
	let lastName = editable ? (
		<input
			className="form-control m-2"
			type="text"
			ref={(input) => (lastName = input)}
			defaultValue={contact.lastName}
		/>
	) : (
		contact.lastName
	);

	let email = editable ? (
		<input
			className="form-control m-2"
			type="text"
			ref={(input) => (email = input)}
			defaultValue={contact.email}
		/>
	) : (
		contact.email
	);

	let phone = editable ? (
		<input
			className="form-control m-2"
			type="text"
			ref={(input) => (phone = input)}
			defaultValue={contact.lastName}
		/>
	) : (
		contact.phone
	);

	const handleEdit = () => {
		if (editable) {
			let editFirstName = firstName.value;
			let editLastName = lastName.value;
			let editEmail = email.value;
			let editPhone = phone.value;
			let id = contact.id;
			let editContact = {
				id,
				firstName: editFirstName,
				lastName: editLastName,
				email: editEmail,
				phone: editPhone,
			};
			handleUpdate(editContact);
		}

		setEditable(!editable);
	};

	return (
		<>
			<div
				className={`card text-white ${
					editable ? "bg-info" : "bg-dark"
				} mb-3 mr-1`}
				style={{ width: "18rem" }}>
				<div className="card-header">
					{editable ? "Edit Contact" : contact.id}
				</div>
				<div className="card-body d-flex flex-column justify-content-center">
					<h5 className="card-title">{firstName}</h5>
					<h5 className="card-title">{lastName}</h5>
					<h5 className="card-title">{email}</h5>
					<p className="card-text">{phone}</p>
					<div>
						<button
							className="btn btn-warning mr-2"
							onClick={() => handleEdit(contact)}>
							{!editable ? "Edit" : "Submit"}
						</button>
						<button
							className="btn btn-danger"
							onClick={() => handleDelete(contact.id)}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
