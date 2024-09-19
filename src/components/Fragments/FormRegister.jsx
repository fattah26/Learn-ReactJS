import InputForm from "../elements/Input";
import Button from "../elements/Button";

const FormRegister = () => {
	return (
		<form action="">
			<InputForm
				label="Fullname"
				type="text"
				name="fullname"
				placeholder="insert name"
			/>

			<InputForm
				label="Email"
				type="email"
				name="email"
				placeholder="example@mail.com"
			/>

			<InputForm
				label="Password"
				type="password"
				name="password"
				placeholder="••••••••"
			/>

			<InputForm
				label="Confirm Password"
				type="password"
				name="confirmPassword"
				placeholder="••••••••"
			/>

			<Button variant="bg-primary w-full hover:bg-hover">Register</Button>
		</form>
	);
};

export default FormRegister;
