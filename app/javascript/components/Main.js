import React from "react";
import NewContact from "./NewContact";

const Main = () => {

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-md-4 bg-dark">
					<NewContact />
				</div>
				<div className="col-md-8 bg-primary">
					Contacts
				</div>
			</div>
		</div>
	);
};

export default Main;
