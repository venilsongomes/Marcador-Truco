import React from 'react';
import './App.css'
import { useState, useEffect } from 'react';





function Home() {

    const [ pontuacao, setPontuacao] = useState(0)
    const [ pontuacao1, setPontuacao1] = useState(0)


function Nos(){

    if(pontuacao === 11){
        setPontuacao(pontuacao + 1)
        alert('Nós ganhamos')
        setPontuacao1(0);
        setPontuacao(0);
    }else{
        setPontuacao(pontuacao + 1)
    }
}

function Eles(){

    if(pontuacao1 === 11){
        setPontuacao1(pontuacao1 + 1)
        alert('Eles ganharam')
        setPontuacao1(0);
        setPontuacao(0);
    }
    else{
        setPontuacao1(pontuacao1 + 1)
    }
}

function truco1(){


    if(pontuacao >= 9){
        alert('Nós ganhamos')
        setPontuacao1(0);
        setPontuacao(0);
    }else{
        setPontuacao(pontuacao + 3)
    }
}

function truco2(){

  
    if( pontuacao1 >= 9){
        alert('Eles ganhamos')
        setPontuacao1(0);
        setPontuacao(0);
    }else{
        setPontuacao1( pontuacao1 + 3)
    }
}

useEffect(() => {
    console.log(`A pontuação mudou: ${pontuacao}`);
    // Aqui você pode adicionar lógica adicional, como salvar a pontuação em um banco de dados
  }, [pontuacao, pontuacao1]); // Executa sempre que "pontuacao" mudar

  return (
    <>   
    <section className='container'>

        <h2>Truco do Venilson Gomes </h2>

<section className='cardprin'> 
    
    <div className='card01'>
          
          <div className='card1'>  
            
            <h1> Nós</h1>
                <p>  {pontuacao} </p>

                 <button onClick={Nos} className='naotruco'> <img src=".\src\assets\paus.svg" /> </button>
          </div>

          <div className='card1'>  
            
            <h1> Eles </h1>
            
            <p>{pontuacao1} </p>
            
                 

                 <button onClick={Eles} className='naotruco'> <img src=".\src\assets\paus.svg" /></button>
          </div>

          
        </div> </section>
        
<div className='truco'>
<button onClick={truco1}  className='ex'><img src=".\src\assets\coracao.svg" /></button>
<p className='trucoo'>Truco!!!</p>   
<button onClick={truco2} className='ex'><img src=".\src\assets\coracao.svg" /></button>
    
     </div>


    </section>
    
    
    
    
    
    </>
  )
}

export default Home;