interface mongodb_document {
	_id: string;
}
interface product_document extends mongodb_document {
	discount_percentage?: string;
	image_files_ids?: string[];
	review_width: string;
	review_count: string;
	title: string;
	sale_price: string;
	currency: string;
	price: string;
}
interface review_document_base extends mongodb_document {
	user_id: string;
	width: number;
	time: string /* unix timestamp */;
	title: string;
	text: string;
}
interface product_review_document extends review_document_base {
	product_id: string;
}
interface overall_review_document extends review_document_base {
	/* these reviews are about overall exprience of our services */
}
interface cart_items_document extends mongodb_document {
	user_id: string;
	product_id: string;
	count: number;
}
interface newsletter_subscribed_email extends mongodb_document {
	email_address: string;
}
interface download_center_item extends mongodb_document {
	file_id: string;
	title: string;
}