const AuthLayout = ({ children, title }) => {
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					alt="Your Company"
					src="/src/assets/profile.png"
					className="mx-auto h-28 w-auto"
				/>
				<h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					{title}
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;

