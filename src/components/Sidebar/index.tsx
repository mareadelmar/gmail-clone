import { Button } from "./style.js";
import AddIcon from "@mui/icons-material/Add";
import SidebarItem from "../SidebarItem";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import NoteRoundedIcon from "@mui/icons-material/NoteRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const SIDEBAR_ITEMS = [
	{ icon: InboxIcon, title: "Recibidos" },
	{ icon: StarIcon, title: "Destacados" },
	{ icon: AccessTimeFilledIcon, title: "Pospuestos" },
	{ icon: ChatBubbleIcon, title: "Chats" },
	{ icon: SendIcon, title: "Enviados" },
	{ icon: NoteRoundedIcon, title: "Borradores" },
	{ icon: DeleteRoundedIcon, title: "Categorías" },
];

const Sidebar = () => {
	return (
		<aside>
			<Button startIcon={<AddIcon />}>Compose</Button>
			<div>
				<SidebarItem
					Icon={InboxIcon}
					title='Recibidos'
					totalItems={345}
				/>
				<SidebarItem Icon={StarIcon} title='Destacados' />
				<SidebarItem
					Icon={AccessTimeFilledIcon}
					title='Pospuestos'
					totalItems={null}
				/>
				<SidebarItem Icon={ChatBubbleIcon} title='Chats' />
				<SidebarItem Icon={SendIcon} title='Enviados' />
				<SidebarItem
					Icon={NoteRoundedIcon}
					title='Borradores'
					totalItems={71}
				/>
				<SidebarItem Icon={DeleteRoundedIcon} title='Categorías' />
			</div>
		</aside>
	);
};

export default Sidebar;
