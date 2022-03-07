import styled from "styled-components";

export const Container = styled.ul`
	list-style: none;
	display: flex;
	padding: 0;
`;

export const Tab = styled.li`
	width: 200px;
	display: flex;
	padding: 1rem 0.5rem;
	color: var(--color-grey);
	cursor: pointer;
	color: ${props => props.selected && "#c04b37"};
	border-bottom: ${props => props.selected && "2px solid #c04b37"};
	&:hover {
		color: #c04b37;
		background-color: whitesmoke;
		border-bottom: 2px solid #c04b37;
	}
`;

export const TabTitle = styled.h3`
	padding-left: 1rem;
`;
