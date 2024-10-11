import { Grid } from "@mui/material";
import Member from "./Member";

const teamData = [
	{
		name: "Sujit Dhage",
		
		title: "Competitive Programmer",
		fb: "",
		bio: "......",
		wp: "whatsapp://send?phone=+919423169155",
		gh: "https://github.com/SujitDhage1",
		email: "sujitdhage099@gmail.com"
	},
	{
		name: "abc",
		
		title: "Competitive Programmer",
		bio: "Passionate competitive programmer constantly pushing the boundaries of computer science with a proven track record of success in programming competitions.",
		fb: "",
		wp: "whatsapp://send?phone=+9423169155",
		gh: "https://github.com/SujitDhage1",
		email: "sujitdhage099@gmail.com"
	},
];

const Team = () => {
	return (
		<Grid container spacing="20px" sx={{ padding: { xs: "16px", sm: "20px" } }}>
			{teamData.map((data, i) => (
				<Member key={i} data={data} />
			))}
		</Grid>
	);
};

export default Team;
