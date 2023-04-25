import { useNavigate } from "react-router-dom";

export const BackButtonRow = ({ location, row_class_name }) => {
	var nav = useNavigate();
	return (
		<div className={["tw-flex tw-justify-end", row_class_name].join(" ")}>
			<button className="tw-border tw-border-black tw-px-2" onClick={() => nav(location)}>
				بازگشت
			</button>
		</div>
	);
};
