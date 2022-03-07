import { IconButton, Checkbox } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "./style.js";

const EmailsIcons = () => {
	return (
		<Container>
			<div className='emails-icons-left'>
				<IconButton>
					<Checkbox />
				</IconButton>
				<IconButton>
					<ArrowDropDownIcon />
				</IconButton>
				<IconButton>
					<RefreshIcon />
				</IconButton>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			</div>
			<div className='emails-icons-right'>
				<IconButton>
					<ArrowBackIosNewIcon />
				</IconButton>
				<IconButton>
					<ArrowForwardIosIcon />
				</IconButton>
			</div>
		</Container>
	);
};

export default EmailsIcons;
