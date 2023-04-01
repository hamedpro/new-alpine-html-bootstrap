import React, { useContext, useEffect } from "react";
import mediumZoom from "medium-zoom";
import { GlobalContext } from "../../GlobalContext";
export const InstagramPhotos = () => {
	//when you want to use this component , "instagram_images_file_ids" must be in key_values collection
	var { key_values } = useContext(GlobalContext).global_context_state;
	var instagram_images_file_ids = key_values.find(
		(i) => i.key === "instagram_images_file_ids"
	).value;
	useEffect(() => {
		function init_medium_zoom() {
			const zoomImgs = document.querySelectorAll("[data-zoomable]");

			zoomImgs.forEach((img) => {
				const zoom = new mediumZoom(img, {
					margin: 30,
				});
			});
		}
		init_medium_zoom(); //make sure to destroy medium zoom instance at correct time
	}, []);
	return (
		<div className="row g-2">
			<div className="d-none d-md-block col-md-4" data-aos="fade-in" data-aos-delay="150">
				<picture>
					<img
						className="img-fluid"
						src={new URL(`/files/${instagram_images_file_ids[0]}`, api_endpoint).href}
						data-zoomable
					/>
				</picture>
			</div>
			<div className="col-12 col-md-8" data-aos="fade-in" data-aos-delay="300">
				<div className="row g-2">
					{instagram_images_file_ids.slice(1, 9).map((i) => (
						<div className="col-3" key={i}>
							<picture>
								<img
									className="img-fluid"
									src={new URL(`/files/${i}`, api_endpoint).href}
									data-zoomable
								/>
							</picture>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
