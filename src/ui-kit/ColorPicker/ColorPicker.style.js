import styled from "styled-components";

export const StyledColorPicker = styled.svg`
color: ${(props => props.color)};
`;

export const StyledContainerColor = styled.div`
display: block;
width: 230px;
text-align: left;
& p {
	color: #323749;
}
& .panelColor{
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 7px ;
}
.container{
	border: 1px solid #dedfe5;
	border-radius: 5px;
}

`;