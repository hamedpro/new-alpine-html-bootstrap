(function () {
	document.addEventListener("DOMContentLoaded", () => {
		// handle filter navigation on category page
		const filterSearchBars = document.querySelectorAll(".filter-search");

		const handleCategoryFilterSearch = (event, search) => {
			const filterWidget = event.target.closest(".widget-filter");
			const filterOptions = filterWidget
				? filterWidget.querySelectorAll(".filter-options .form-group")
				: [];
			if (search.value && filterOptions && filterWidget) {
				filterOptions.forEach((option) => {
					if (
						!option.innerText
							.trim()
							.toLowerCase()
							.includes(search.value.toLowerCase().trim())
					) {
						option.classList.add("d-none");
					} else {
						option.classList.remove("d-none");
					}
				});
				return;
			}
			filterOptions.forEach((option) => {
				option.classList.remove("d-none");
			});
		};

		filterSearchBars.forEach((search) => {
			search.addEventListener("keyup", (event) => {
				handleCategoryFilterSearch(event, search);
			});
		});
	});
})();
