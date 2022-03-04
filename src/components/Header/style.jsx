import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
`;

export const Img = styled.img`
	height: 32px;
	object-fit: contain;
	margin-left: 1rem;
`;

export const Searcher = styled.div`
	display: flex;
	flex: 0.7;
	align-items: center;
	background-color: #f2f0f0;
	padding: 0 0.25rem;
`;

export const Input = styled.input`
	width: 100%;
	margin: 0 0.25rem;
	border: none;
	background-color: inherit;
`;

export const UserMenu = styled.div`
	display: flex;
	align-items: center;
	padding-right: 1rem;
`;
