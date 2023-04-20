import styled from "styled-components";

export const CardDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 30rem;
	width: 30%;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	border-radius: 10px;
	cursor: pointer;
	font-family: "Plus Jakarta Sans";
	font-weight: 800;
	transition: 1s;
	a:link {
		text-decoration: none !important;
	}

	.text{
		margin: 0px auto;
	}

	.img{
		background-color: lightblue;
		height: 80%;
		width: 80%;
	}
`;

