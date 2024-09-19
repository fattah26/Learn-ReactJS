import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
	return (
		<AuthLayout title="Sign in to your account">
			<FormLogin />
			<p className="mt-5 text-sm text-center">
				Don't have an account ? 
                <Link to="/register" className="font-bold text-primary hover:underline">
                    Sign up
                </Link>
			</p>
		</AuthLayout>
	);
};
export default LoginPage;
