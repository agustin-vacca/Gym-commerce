import style from "../Card/Card.module.css"


function Card({id, name, email}) {
        return(
    <div>
        <div className={style.card}>
        <p>email : {email}</p>
        <p>name : {name}</p>
        <p>id : {id}</p>
        </div>        
    </div>
    )

}
export default Card;
