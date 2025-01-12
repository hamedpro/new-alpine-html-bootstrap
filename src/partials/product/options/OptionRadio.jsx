import React from "react";

export const OptionRadio = (props) => {
	return (
		<div className={`form-check-option ${props["option-classes"]}`}>
			<input
				type="radio"
				name={`product-option-${props.type}`}
				value={props.value}
				disabled={props.disabled}
				id={`option-${props.type}-${props.index}`}
			/>
			<label htmlFor={`option-${props.type}-${props.index}`}>
				{props["label-top"] && <small className="d-block">{props["label-top"]}</small>}
				{props["label-bottom"] && <small>{props["label-bottom"]}</small>}
			</label>
		</div>
	);
};
