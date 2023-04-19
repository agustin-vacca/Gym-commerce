import styled from "styled-components";

export const CardDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 20rem;
	width: 15rem;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	border-radius: 10px;
	cursor: pointer;
	font-family: "Plus Jakarta Sans";
	font-weight: 800;
	transition: 1s;
	:hover {
		scale: 103%;
	}
	a:link {
		text-decoration: none !important;
	}
`;

export const TextPrice = styled.div`
	font-size: small;
`;

export const TextName = styled.div`
	font-size: large;
	font-family: "Plus Jakarta Sans";
`;
export const ProductImage = styled.img`
	width: 13rem;
	height: 10rem;
`;

export const LinkText = styled.div`
	color: black;
	font-size: small;
	padding: 10px;
	box-shadow: rgba(50, 50, 93, 0.5) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	border-radius: 20px;
	font-weight: bold;
	transition: 1s;
	:hover {
		box-shadow: rgba(54, 138, 73) 0px 7px 5px -1px,
			rgba(95, 73, 171, 0.7) 12px 12px 12px -1px;
	}
`;
