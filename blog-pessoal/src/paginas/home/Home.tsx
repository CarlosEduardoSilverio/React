import React from "react";
import { deflate } from "zlib";
import './Home.css'

function Home(){
    return(
        <body>
        <div className="container">
        <h1 className="fonte mr">Pagina Inicial</h1>
        <p className="fonte mr">Configurações</p>
        <p className="fonte mr">Ajuda</p>
        <p className="fonte">Contato</p>
        </div>
        <div className="center">
        <img className="tamanho" src="https://preview.redd.it/ds8uqr6qgiy61.jpg?auto=webp&s=a81f6922e71f684a2c04af8f837a8c1b2f3f365b" alt="" />
        </div>
        </body>
    );
}

export default Home;