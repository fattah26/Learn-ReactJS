import FormRegister from "../components/Fragments/FormRegister"
import AuthLayout from "../components/Layouts/AuthLayouts"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return(
        <AuthLayout title="Sign Up for an Account">
            <FormRegister/>
            <p className="mt-5 text-sm text-center">
				Have an account ?
                <Link to="/login" className="font-bold text-primary hover:underline">
                    Login
                </Link>
			</p>
        </AuthLayout>
    )
}

export default RegisterPage;