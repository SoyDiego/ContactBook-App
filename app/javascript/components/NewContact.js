import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faUserPlus, faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

const NewContact = ({ handleSubmit }) => {
	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();
	const phone = useRef();

	return (
		<>
			<form
				onSubmit={async (e) =>
					await handleSubmit(
						e,
						firstName.current.value,
						lastName.current.value,
						email.current.value,
						phone.current.value
					)
				}>
				<div class="input-group mb-2 mr-sm-2">
					<div class="input-group-prepend">
						<div class="input-group-text">
							<FontAwesomeIcon icon={faUser} />
						</div>
					</div>
					<input
						type="text"
						class="form-control"
						placeholder="First Name"
						ref={firstName}
					/>
				</div>

				<div class="input-group mb-2 mr-sm-2">
					<div class="input-group-prepend">
						<div class="input-group-text">
							<FontAwesomeIcon icon={faUser} />
						</div>
					</div>
					<input
						type="text"
						class="form-control"
						placeholder="Last Name"
						ref={lastName}
					/>
				</div>

				<div class="input-group mb-2 mr-sm-2">
					<div class="input-group-prepend">
						<div class="input-group-text">
							<FontAwesomeIcon icon={faAt} />
						</div>
					</div>
					<input
						type="text"
						class="form-control"
						placeholder="Your Email"
						ref={email}
					/>
				</div>

				<div class="input-group mb-2 mr-sm-2">
					<div class="input-group-prepend">
						<div class="input-group-text">
							<FontAwesomeIcon icon={faPhone} />
						</div>
					</div>
					<input
						type="text"
						class="form-control"
						placeholder="Your Phone"
						ref={phone}
					/>
				</div>
				<button className="btn btn-primary">
					<FontAwesomeIcon className="mr-1" icon={faUserPlus} />
					Add new Contact
				</button>
			</form>
			<hr />
		</>
	);
};

export default NewContact;
