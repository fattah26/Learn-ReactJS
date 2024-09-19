const Input = ({ type, placeholder, name }) => {
	return (
		<input
			type={type}
			className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
			placeholder={placeholder}
			name={name}
			id={name}
		/>
	);
};

export default Input;
