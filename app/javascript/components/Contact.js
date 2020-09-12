import React, { useState, useRef } from "react";

const Contact = ({ contact, handleUpdate, handleDelete }) => {
	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();
	const phone = useRef();

	const [editable, setEditable] = useState(false);
	let firstNameEdit = editable ? (
		<input
			className="form-control"
			type="text"
			ref={firstName}
			defaultValue={contact.firstName}
		/>
	) : (
		contact.firstName
	);
	let lastNameEdit = editable ? (
		<input
			className="form-control"
			type="text"
			ref={lastName}
			defaultValue={contact.lastName}
		/>
	) : (
		contact.lastName
	);

	let emailEdit = editable ? (
		<input
			className="form-control"
			type="text"
			ref={email}
			defaultValue={contact.email}
		/>
	) : (
		contact.email
	);

	let phoneEdit = editable ? (
		<input
			className="form-control"
			type="text"
			ref={phone}
			defaultValue={contact.phone}
		/>
	) : (
		contact.phone
	);

	const handleEdit = () => {
		if (editable) {
			let editFirstName = firstName.current.value;
			let editLastName = lastName.current.value;
			let editEmail = email.current.value;
			let editPhone = phone.current.value;
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
					{editable ? "Edit Contact" : `#${contact.id}`}
				</div>
				<div className="card-body d-flex flex-column justify-content-center">
					<p className="card-title">{firstNameEdit}</p>
					<p className="card-title">{lastNameEdit}</p>
					<p className="card-title">{emailEdit}</p>
					<p className="card-text">{phoneEdit}</p>
					<div>
						<button
							className="btn btn-warning mr-2"
							onClick={() => handleEdit()}>
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
