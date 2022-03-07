import styled from "styled-components";
import { Button as BtnMUI } from "@mui/material";

export const Container = styled.aside`
	flex: 0.3;
	max-width: 280px;
`;

export const Button = styled(BtnMUI)`
	text-transform: capitalize !important;
	color: #666 !important;
	padding: 1rem 2rem !important;
	border-radius: 2rem !important;
	box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75) !important;
	margin: 2rem !important;
	font-weight: bolder !important;
	font-size: 16px !important;
`;
