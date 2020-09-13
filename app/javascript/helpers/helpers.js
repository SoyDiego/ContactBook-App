import Swal from "sweetalert2";

export const Toast = Swal.mixin({
	toast: true,
	position: "top",
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});

export const showMessage = (type, message) => {
	Toast.fire({
		icon: type,
		title: message,
	});
};

export const showError = () =>
	Swal.fire({
		title: "Error!",
		text: "Something went wrong...",
		icon: "error",
	});
