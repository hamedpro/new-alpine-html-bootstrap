import React from "react";
import { AsideMenuOne } from "./AsideMenuOne.jsx";
import { BreadCrumbsTwo } from "./BreadCrumbsTwo.jsx";
import { NavBar } from "./NavBar";
import { Pagination } from "./Pagination.jsx";
import { ToolbarTop } from "./ToolbarTop.jsx";
import { Footer } from "./Footer"
import { OffCanvas } from "./OffCanvas"
import { SearchOverlay } from "./SearchOverlay"

export const Category = () => {
	return (
		<>
            <NavBar />
            <section class="mt-0 {{ config.classes.content }}">

<div class="py-6 bg-img-cover bg-dark bg-overlay-gradient-dark position-relative overflow-hidden mb-4 bg-pos-center-center"
    style="background-image: url({{webRoot}}/assets/images/banners/banner-1.jpg);">
    <div class="container position-relative z-index-20" data-aos="fade-right" data-aos-delay="300">
       <BreadCrumbsTwo /> 
        <h1 class="fw-bold display-6 mb-4 text-white">Latest Arrivals (121)</h1>
        <div class="col-12 col-md-6">
            <p class="lead text-white mb-0">
                Move, stretch, jump and hike in our latest waterproof arrivals. We've got you covered for your
                hike or climbing sessions, from Gortex jackets to lightweight waterproof pants. Discover our
                latest range of outdoor clothing.
            </p>
        </div>
    </div>
</div>

<div class="container">

    <div class="row">

      
        <div class="d-none d-lg-flex col-lg-3">
            <div class="pe-4">
               <AsideMenuOne /> 
            </div>
        </div>

     
        <div class="col-12 col-lg-9">

           
            <ToolbarTop /> 
            

          
            <div class="row g-4 mb-5">
                {{#if (config category-products)}}
                    {{#each (limit category-products.entries 4)}}
                        <div class="col-12 col-sm-6 col-md-4">
                            {{> listing-cards/listing-card this }}
                        </div>
                    {{/each}}
                {{/if}}
                <div class="d-none d-md-flex col-md-8">
                    <div class="w-100 h-100 position-relative">
                        <div class="position-absolute w-50 h-100 start-0 bottom-0 top-0 bg-pos-center-center bg-img-cover"
                            style="background-image: url({{webRoot}}/assets/images/banners/banner-3.jpg);">
                        </div>
                        <div
                            class="position-absolute w-50 h-100 bg-light end-0 top-0 bottom-0 d-flex justify-content-center align-items-center">
                            <div class="px-4 text-center">
                                <h4 class="fs-4 fw-bold mb-4">Built for adventure</h4>
                                <p class="mb-4">The perfect grab-and-go layer for every hiking adventure</p>
                                <a href="#" class="text-link-border border-2 pb-1 fw-bolder">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                {{#if (config category-products)}}
                    {{#each (limit category-products.entries 6)}}
                        <div class="col-12 col-sm-6 col-md-4">
                            {{> listing-cards/listing-card this }}
                        </div>
                    {{/each}}
                {{/if}}
            </div>
            

           
           <Pagination /> 
           

           
            <div class="border-top mt-5 pt-5">
                <p class="lead fw-bolder">Related Categories</p>
                <div class="d-flex flex-wrap justify-content-start align-items-center">
                    <a class="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
                        href="#">Hiking
                        Shoes</a>
                    <a class="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
                        href="#">Waterproof Trousers</a>
                    <a class="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
                        href="#">Hiking
                        Shirts</a>
                    <a class="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
                        href="#">Jackets</a>
                    <a class="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
                        href="#">Gilets</a>
                    <a class="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
                        href="#">Hiking
                        Socks</a>
                    <a class="btn btn-sm btn-outline-dark rounded-pill me-2 mb-2 mb-md-0 text-white-hover"
                        href="#">Rugsacks</a>
                </div>
            </div>
           
        </div>
      

    </div>
</div>

            </section>
            <Footer /> 
            <OffCanvas /> 
            <SearchOverlay /> 
		</>
	);
};
