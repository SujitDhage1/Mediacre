import { Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Footer = () => {
	const smallScreen = useMediaQuery("(max-width: 350px)");
	return (
		<Paper
			sx={{ mt: { xs: "16px", md: "20px" }, px: { xs: "16px", md: "20px" }, py: "28px" }}
			component="footer"
		>
			<Stack
				direction={smallScreen ? "column" : "row"}
				rowGap={1}
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography color="#4b4a72">
					&copy; <Link to="https://github.com/SujitDhage1">Sujit Dhage</Link> -{" "}
					{new Date().getFullYear()}
				</Typography>
				<Stack direction="row" alignItems="center" columnGap={1}>
					<Link target="_blank" to="https://www.linkedin.com/in/sujit-dhage-01022924b">
						<IconBrandLinkedin />
					</Link>
					
					
					<Link target="_blank" to="https://github.com/SujitDhage1">
						<IconBrandGithub />
					</Link>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default Footer;
