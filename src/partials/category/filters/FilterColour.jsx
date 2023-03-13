import React from 'react'

export const FilterColour = (props) => {
	return (
		<div
			className={`form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkmark form-check-custom ${props["colour-class"]}`}
		>
			<input
				type="checkbox"
				className="form-check-color-input"
				id={`filter-${props.type}-${props.index}`}
			/>
			<label
				className="form-check-label"
				htmlFor={`filter-${props.type}-${props.index}`}
			></label>
		</div>
	);
};
