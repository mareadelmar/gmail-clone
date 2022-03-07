import { useState } from "react";
import { Container, Title } from "./style";

const SidebarItem = ({
	Icon,
	title,
	totalItems = null,
}: {
	title: string;
	totalItems: number | null;
}) => {
	const [selected, setSelected] = useState<Boolean>(false);

	return (
		<Container selected={selected}>
			<Icon />
			<Title>{title}</Title>
			<p>{totalItems}</p>
		</Container>
	);
};

export default SidebarItem;
