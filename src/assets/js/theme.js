// Vendor Imports
import "bootstrap";

// Framework import.
import "./components/aos"; // done
import "./components/checkout";
import "./components/hotspots";
import "./components/navbar";
import "./components/nouislider";
import "./components/popover";
import "./components/product";
import "./components/scroll-to";
import "./components/search";
import './components/tooltip';

// Add a body class once page has loaded
// Used to add CSS transitions to elems
// and avoids content shifting during page load
window.addEventListener("load", function () {
	document.body.classList.add("page-loaded");
});