import React,{ useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import {getCharacters} from "../../redux/actions"
import Card from "../Card/Card";
import style from "./Home.module.css"


const Home = () => {
const dispatch = useDispatch();
const allCharacters = useSelector((state) => state.characters)


useEffect(() => {
  dispatch(getCharacters())
   }, [dispatch]);

  return (
    <div>
      <h1>Hola este es Home</h1>
      <div className={style.cardDisplayer}>
    {
  allCharacters.map(el=>{
    return <Card 
    key={el.id}
    id={el.id}
    name={el.name}
    email={el.email}
    />
  })}
      </div>


    </div>


  );
};
export default Home;
