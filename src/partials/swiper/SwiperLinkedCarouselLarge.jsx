import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { ListingCard } from "../category/listing-cards/ListingCard";
export const SwiperLinkedCarouselLarge = () => {
	var { products } = useContext(GlobalContext).global_context_state;
	if (products === undefined) return <h1>loading products ... </h1>;

	return (
		<div className="swiper-container h-100 swiper-linked-carousel-large">
			<div className="swiper-wrapper h-100">
				<div className="swiper-slide">
					<div className="row g-3">
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
					</div>
				</div>

				<div className="swiper-slide">
					<div className="row g-3">
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
					</div>
				</div>

				<div className="swiper-slide">
					<div className="row g-3">
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
						<div className="col-12 col-md-6">
							<ListingCard {...products[0]} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
