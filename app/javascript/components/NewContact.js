import React, { useRef } from "react";

const NewContact = ({ handleSubmit }) => {
	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();
	const phone = useRef();

	return (
		<div className="col-md-6 text-center">
			<form
				onSubmit={(e) =>
					handleSubmit(
						e,
						firstName.current.value,
                        lastName.current.value,
                        email.current.value,
                        phone.current.value,
					)
				}>
				<input
					className="form-control mb-3"
					ref={firstName}
					placeholder="First Name"
				/>
				<input
					className="form-control mb-3"
					ref={lastName}
					placeholder="Last Name"
				/>

				<input
					className="form-control mb-3"
					ref={email}
					placeholder="Your email @"
				/>
				<input
					className="form-control mb-3"
					ref={phone}
					placeholder="Your Phone"
				/>
				<button className="btn btn-primary">Add new Contact</button>
			</form>
			<hr />
		</div>
	);
};

export default NewContact;
