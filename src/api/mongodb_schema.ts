interface mongodb_document {
	_id: string;
}
interface product_document extends mongodb_document {
	discount_percentage?: string;
	image_file_id?: string;
	review_width: string;
	review_count: string;
	title: string;
	sale_price: string;
	currency: string;
	price: string;
}
interface product_review_document extends mongodb_document {
	user_id: string;
	width: string;
	product_id: string;
	time: string /* unix timestamp */;
}
