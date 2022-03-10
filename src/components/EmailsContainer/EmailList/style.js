import styled from "styled-components";

export const Container = styled.ul`
	padding: 0;
`;

export const Email = styled.li`
	display: flex;
	vertical-align: center;
	height: 3.5rem;
	color: var(--color-grey);
	cursor: pointer;
	box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
	&:hover {
		box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
			0 1px 2px 0 rgba(60, 64, 67, 0.3),
			0 1px 3px 1px rgba(60, 64, 67, 0.15);
	}
`;

export const EmailSubject = styled.div`
	align-self: center;
	flex: 0.25;
`;

export const EmailContent = styled.p`
	align-self: center;
	max-width: 80ch;
	flex: 1;
	overflow: hidden;
`;

export const EmailTitle = styled.span`
	font-weight: bolder;
	padding-right: 0.5rem;
`;

export const EmailMessage = styled.span`
	overflow: hidden;
	letter-spacing: 0.2px;
`;
