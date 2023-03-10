import React from "react";

export const OptionCheckbox = (props) => {
	return (
		<div class={`form-check-option ${props["option-classes"]}`}>
			<input
				type="checkbox"
				name={`product-option-${props.type}}`}
				value={props.value}
				id={`option-${props.type}-${index}`}
			/>
			<label for={`option-${props.type}-${index}`}>
				{props["label-top"] && <small className="d-block">{props["label-top"]}</small>}

				{props["label-top"] && <small>{props["label-bottom"]}</small>}
			</label>
		</div>
	);
};
