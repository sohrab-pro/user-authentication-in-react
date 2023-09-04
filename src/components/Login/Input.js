import React from "react";

const Input = (props) => {
	return (
		<>
			<label htmlFor={props.id} className="block mb-2">
				{props.label}
			</label>
			<input
				type={props.type}
				onChange={props.onChange}
				value={props.value}
				id={props.id}
				className={props.className}
				required={props.required}
			/>
		</>
	);
};

export default Input;
