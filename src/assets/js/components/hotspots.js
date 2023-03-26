import tippy from "tippy.js";
export function init_hotspot(element_id, options = {}) {
	var hotspot = document.getElementById(element_id);
	var type = options.type || "tippy";
	var trigger = options.trigger || "click";
	var hotspotContent = null;

	if (options.placement) {
		function positionHotspot() {
			Object.keys(options.placement).forEach((key) => {
				hotspot.style[key] = `${options.placement[key]}`;
			});
		}
		positionHotspot();
	}
	if (options.alwaysVisible) {
		hotspot.classList.add("always-show");
	}
	if (options.alwaysAnimate) {
		hotspot.classList.add("always-animate");
	}
	function setHotspotContent() {
		if (options.contentTarget) {
			let content = document.querySelector(`${options.contentTarget}`);
			if (content) {
				hotspotContent = content.innerHTML;
			} else {
				hotspotContent = "Missing content";
			}
			return;
		}
		if (options.content) {
			hotspotContent = options.content;
			return;
		}
		hotspotContent = "Missing content";
	}
	setHotspotContent();

	tippy(hotspot, {
		allowHTML: true,
		trigger: trigger,
		content: hotspotContent,
		theme: "light",
		animation: "shift-away",
		interactive: true,
		hideOnClick: true,
		appendTo: document.body,
	});
}