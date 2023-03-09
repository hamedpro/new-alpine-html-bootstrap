import React from 'react'

export const FilterColour = (props) => {
	return (
		<div
			class={`form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkmark form-check-custom ${props["colour-class"]}`}
		>
			<input
				type="checkbox"
				class="form-check-color-input"
				id={`filter-${props.type}-${index}`}
			/>
			<label class="form-check-label" for={`filter-${props.type}-${index}`}></label>
		</div>
	);
};
