import { useState } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Container, Tab, TabTitle } from "./style.js";

const EMAIL_TABS = [
	{ title: "Recibidos", icon: InboxIcon, defaultSelect: true },
	{ title: "Social", icon: PeopleIcon, defaultSelect: false },
	{ title: "Promociones", icon: LocalOfferIcon, defaultSelect: false },
];

const EmailTab = ({
	Icon,
	title,
	selected,
}: {
	title: string;
	selected: boolean;
}) => {
	return (
		<Tab selected={selected}>
			<Icon />
			<TabTitle>{title}</TabTitle>
		</Tab>
	);
};

const EmailTabs = () => {
	//const [selectedTab, setSelectedTab] = useState(false);
	return (
		<Container>
			{EMAIL_TABS.map(item => (
				<EmailTab
					Icon={item.icon}
					title={item.title}
					selected={item.defaultSelect}
				/>
			))}
		</Container>
	);
};

export default EmailTabs;
