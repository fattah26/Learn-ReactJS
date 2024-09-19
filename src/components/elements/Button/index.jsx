const Button = (props) => {
    const { children, variant = "bg-black" } = props;
    return (
        <button
            // className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`}
            className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
            type="submit"
        >
            {/* {props.text} */}
            {children}
        </button>
    );
};

export default Button;