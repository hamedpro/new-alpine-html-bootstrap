import React from 'react'

export const FilterCheckbox = ({ count, label }) => {
	return (
		<div class="form-group form-check mb-0">
			<input type="checkbox" class="form-check-input" id={`filter-${type}-${index}`} />
			<label
				class="form-check-label fw-normal text-body flex-grow-1 d-flex justify-content-between"
				for="filter-{{ type }}-{{ @index }}"
			>
				{label}
				{count && <span class="text-muted">({count})</span>}
			</label>
		</div>
	);
};
