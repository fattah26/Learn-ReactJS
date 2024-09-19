import Label from "./Label";
import Input from "./Input";

const InputForm = ({name, type, placeholder, label }) => {
	return (
		<div className="mb-6 ">
			<Label htmlFor={name}>{label}</Label>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
            />
		</div>
	);
};

export default InputForm;
