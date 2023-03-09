import React from 'react'

export const FilterCheckboxTwo = ({ label, type }) => {
	return (
		<div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
			<input type="checkbox" class="form-check-bg-input" id={`filter-${type}-${index}`} />
			<label class="form-check-label fw-normal" for={`filter-${type}-${index}`}>
				{{ label }}
			</label>
		</div>
	);
};
