import React from "react";
import "./Preguntas.css";
import { Layout } from "../NavBar/NavbarStyle";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Preguntas(){
// let question= document.querySelector('.question');
// let btnDropdown= document.querySelector('.question .more');
// let answer =document.querySelector('.answer');
// let parrafo = document.querySelector('.answer p');

// for(let i = 0; i < btnDropdown.length; i++){
//     let altoParrafo = parrafo[i].clientHeight;
//     let switchc = 0;
//     btnDropdown[i].addEventListener('click', ()=>{
//         if( switchc == 0){
//             answer[i].style.height = altoParrafo`.px`;
//             question[i].style.marginbottom = `10px`;
//             btnDropdown[i].innerHTML = `<i>-</i>`;
//             switchc++;
//         }
//         else if(switchc == 1){
//             answer[i].style.height = '0';
//             question[i].style.marginbottom= '0';
//             btnDropdown[i].innerHTML =`<i>+</i>`;
//             switchc--;
//         }
//     })
// }
    return(
       <Layout>
        <NavBar/>
        <div className="contenedor">
        <div className="father">
            <div className="row">
                <div className="conteiner-faq">
                    <div className="title-faq">
                        <h3>Preguntas Frecuentes</h3>
                    </div>
                    <div className="item-faq">
                        <div className="question">
                            <h3>En esta seccion deberia ir la pregunta/consulta<span>Q</span></h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p>En esta seccion debe estar la repuesta a la pregunta<span>A</span></p>
                        </div>
                    </div>
                    <div className="item-faq">
                        <div className="question">
                            <h3>En esta seccion deberia ir la pregunta/consulta<span>Q</span></h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p>En esta seccion debe estar la repuesta a la pregunta<span>A</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
        <Footer />
       </Layout>
    )
};