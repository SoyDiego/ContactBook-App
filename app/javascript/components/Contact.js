import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserEdit,
	faTrash,
	faTimesCircle,
	faUser,
	faAt,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ contact, handleUpdate, handleDelete }) => {
	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();
	const phone = useRef();

	const [editable, setEditable] = useState(false);

	let firstNameEdit = editable ? (
		<div className="input-group ">
			<div className="input-group-prepend">
				<div className="input-group-text">
					<FontAwesomeIcon icon={faUser} />
				</div>
			</div>
			<input
				className="form-control"
				type="text"
				ref={firstName}
				defaultValue={contact.firstName}
			/>
		</div>
	) : (
		contact.firstName
	);
	let lastNameEdit = editable ? (
		<div className="input-group ">
			<div className="input-group-prepend">
				<div className="input-group-text">
					<FontAwesomeIcon icon={faUser} />
				</div>
			</div>
			<input
				className="form-control"
				type="text"
				ref={lastName}
				defaultValue={contact.lastName}
			/>
		</div>
	) : (
		contact.lastName
	);

	let emailEdit = editable ? (
		<div className="input-group ">
			<div className="input-group-prepend">
				<div className="input-group-text">
					<FontAwesomeIcon icon={faAt} />
				</div>
			</div>
			<input
				className="form-control"
				type="text"
				ref={email}
				defaultValue={contact.email}
			/>
		</div>
	) : (
		contact.email
	);

	let phoneEdit = editable ? (
		<div className="input-group ">
			<div className="input-group-prepend">
				<div className="input-group-text">
					<FontAwesomeIcon icon={faPhone} />
				</div>
			</div>
			<input
				className="form-control"
				type="text"
				ref={phone}
				defaultValue={contact.phone}
			/>
		</div>
	) : (
		contact.phone
	);

	const handleEdit = async () => {
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

			const updated = await handleUpdate(editContact);

			if (updated) {
				setEditable(!editable);
			}
			return;
		}
		setEditable(!editable);
	};

	return (
		<>
			<div
				className={`card text-white ${
					editable ? "card-edit" : "bg-dark"
				} mb-3 mr-1 border-0 animate__animated animate__fadeIn`}
				style={{ width: "18rem" }}>
				<div className="card-header text-white">
					{editable
						? `Editing Contact #${contact.id}`
						: `#${contact.id}`}
				</div>
				<div className="card-body d-flex flex-column justify-content-center">
					<p className="card-title">{firstNameEdit}</p>
					<p className="card-title">{lastNameEdit}</p>
					<p className="card-title">{emailEdit}</p>
					<p className="card-text">{phoneEdit}</p>
					<div>
						<button
							className={`btn ${
								editable ? "btn-primary" : "button-edit"
							} mr-2`}
							onClick={() => handleEdit()}>
							<FontAwesomeIcon
								className="mr-1"
								icon={faUserEdit}
							/>
							{editable ? "Submit" : "Edit"}
						</button>

						<button
							className="btn btn-danger"
							onClick={
								editable
									? () => setEditable(!editable)
									: () => handleDelete(contact.id)
							}>
							<FontAwesomeIcon
								className="mr-1"
								icon={editable ? faTimesCircle : faTrash}
							/>
							{editable ? "Cancel" : "Delete"}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
