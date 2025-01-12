import React from "react";
import { templateName } from "../../../env.json";
export const LogoFull = () => {
	return (
		<div className="d-flex align-items-center">
			<div className="f-w-6 d-flex align-items-center me-2 lh-1">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194 194">
					<path
						fill="currentColor"
						className="svg-logo-white"
						d="M47.45,60l1.36,27.58,53.41-51.66,50.87,50,3.84-26L194,100.65V31.94A31.94,31.94,0,0,0,162.06,0H31.94A31.94,31.94,0,0,0,0,31.94v82.57Z"
					/>
					<path
						fill="currentColor"
						className="svg-logo-dark"
						d="M178.8,113.19l1,34.41L116.3,85.92l-14.12,15.9L88.07,85.92,24.58,147.53l.93-34.41L0,134.86v27.2A31.94,31.94,0,0,0,31.94,194H162.06A31.94,31.94,0,0,0,194,162.06V125.83Z"
					/>
				</svg>
			</div>{" "}
			<span className="fs-5">{templateName}</span>
		</div>
	);
};
