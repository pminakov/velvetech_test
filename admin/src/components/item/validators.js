export const validateName = (value, allValues, props) => {
	if (!value) {
		return "required";
	}
	if (String(value).length < 5) {
		return "5 characters min";
	}
	if (String(value).length > 40) {
		return "40 characters max";
	}
	return undefined
};
export const validatePrice = (value, allValues, props) => {
	try {
		let val = parseFloat(value);
		if (isNaN(val)) {
			return "should be a number"
		}
		if (val <= 0.00) {
			return "should be greater than 0.00"
		}
	} catch (error) {
		return String(error);
	}
};
export const validateExpires = (value, allValues, props) => {
	if (!value) {
		return "required";
	}
	const now = new Date();
	const val = new Date(value);
	return val > now ? undefined : "should be in future"
};
