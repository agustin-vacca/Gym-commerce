import React from "react";
import "./Preguntas.css";
import { Layout } from "../NavBar/NavbarStyle";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Preguntas(){
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