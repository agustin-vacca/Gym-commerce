import styled from "styled-components";

export const CardDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 15%;
	padding: 0 20px;
	font-family: "Plus Jakarta Sans";
	font-weight: 800;
	transition: 1s;


border-radius: 20px;
background-image: linear-gradient(45deg, #F5F5F5 0%, #F0F0F0  51%, #F5F5F5  100%);
box-shadow: 10 10 14px 4px rgba(160,160,160 0.55);
backdrop-filter: blur(25px);
	
:nth-child(even){
border-radius: 20px;
background-image: linear-gradient(45deg, #BEBEBE 0%, #F0F0F0  51%, #BEBEBE  100%);
box-shadow: 10 10 14px 4px rgba(160,160,160 0.55);
backdrop-filter: blur(25px);
}
:hover{
	background-color: rgba(130, 135, 135, 0.3);
}

	.text{
	font-size: small;
    text-align: center;
	text-justify: center;
	}

	.img{
		height: 80%;
		width: 80%;
		margin-bottom: 20px;
		border-radius: 50px;
	}

.btn{
	background-color: #111827;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .75rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}
.btn:hover {
	background-color: #374151;
}
.verProd {
	background-color: #111827;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  padding: .75rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  margin: 0 5% 10px 5%;
}
.verProd:hover {
	background-color: #374151;
}
`;

