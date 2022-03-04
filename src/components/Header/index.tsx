import { Container, Menu, Img, Searcher, Input, UserMenu } from "./style.jsx";
import { IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import avatar from "../../assets/images/avatar.jpg";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Header = () => {
	return (
		<Container>
			<Menu>
				<IconButton size='large'>
					<MenuIcon fontSize='large' />
				</IconButton>
				<Img
					src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png'
					alt=''
				/>
			</Menu>
			<Searcher>
				<IconButton size='large'>
					<SearchIcon />
				</IconButton>
				<Input placeholder='Buscar...' />
				<IconButton size='large'>
					<ArrowDropDownIcon />
				</IconButton>
			</Searcher>
			<UserMenu>
				<IconButton>
					<HelpOutlineOutlinedIcon fontSize='medium' />
				</IconButton>
				<IconButton>
					<AppsIcon fontSize='medium' />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon fontSize='medium' />
				</IconButton>
				<Avatar alt='yetta' src={avatar} />
			</UserMenu>
		</Container>
	);
};

export default Header;
