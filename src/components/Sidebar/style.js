import styled from "styled-components";
import { Button as BtnMUI } from "@mui/material";

export const Button = styled(BtnMUI)`
	text-transform: capitalize !important;
	color: var(--color-grey) !important;
	padding: 1rem !important;
	border-radius: 2rem !important;
	box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75) !important;
	margin: 2rem !important;
`;
