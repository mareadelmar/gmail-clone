import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	align-items: center;
	cursor: pointer;
    padding: .75rem 2rem;
    border-radius: 0 1.5rem 1.5rem 0;
    &:hover {
        background-color: #fcecec;
        color: #c04b37:
    }
    color: ${props => (props.selected ? "#c04b37" : "var(--color-grey)")};
    background-color: ${props => (props.selected ? "#fcecec" : "inherit")};
`;

export const Title = styled.h4`
	margin-left: 1rem;
	flex: 1;
`;
