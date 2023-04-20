import styled from "styled-components";

export const CardDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 30rem;
	width: 30%;
	box-shadow: 2px 5px 10px rgba(0,0,0,0.3);
	border-radius: 10px;
	font-family: "Plus Jakarta Sans";
	font-weight: 800;
	transition: 1s;

	.text{
	width: 100%;
    text-align: center;
	text-justify: center;
		background-color: rgba(185, 186, 255, 0.38);
	}

	.img{
		background-color: lightblue;
		height: 70%;
		width: 70%;
		margin-bottom: 20px;
	}

.btn{
    width: 100%;
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: rgba(185, 186, 255, 0.38);
    color: blue;
    text-decoration: none;
    font-size: 20px;
    transition: 0.4s ease;
}

.btn:hover{
    background-color: blue;
    color: #fff;
}

`;

