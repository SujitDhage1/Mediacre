import { Box } from "@mui/material";

const ContactMap = () => {
	return (
		<Box
			component="div"
			sx={{
				padding: {
					xs: "16px",
					sm: "20px 0 20px 20px",
				},
				height: { xs: "350px", sm: "100%" },
			}}
		>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d317423.364289486!2d73.8342992!3d18.5204305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684844640819!5m2!1sen!2sin
"
				style={{
					border: "5px solid #fff",
					borderRadius: "12px",
					boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
				}}
				height="100%"
				width="100%"
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</Box>
	);
};

export default ContactMap;
