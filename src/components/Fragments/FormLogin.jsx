import InputForm from "../elements/Input";
import Button from "../elements/Button";

const FormLogin = () => {
	return (
		<form action="">
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
			<Button variant="w-full bg-primary hover:bg-hover">Login</Button>
		</form>
	);
};

export default FormLogin;
