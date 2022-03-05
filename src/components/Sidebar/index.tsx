import { Button } from "./style.js";
import AddIcon from "@mui/icons-material/Add";
import SidebarItem from "../SidebarItem";
import InboxIcon from "@mui/icons-material/Inbox";

const Sidebar = () => {
	return (
		<aside>
			<Button startIcon={<AddIcon />}>Compose</Button>
			<SidebarItem Icon={InboxIcon} title='Inbox' totalItems={45} />
		</aside>
	);
};

export default Sidebar;
