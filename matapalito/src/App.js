
import './App.css';
let palavra = "matapalito";
let vidas = 6
let arrayletras = []
let cemiterio = []
function Tentar() {
  document.getElementById('letter').value = document.getElementById('letter').value.toLowerCase()
  arrayletras.push(document.getElementById('letter').value)}
  //Game Loop
  while(arrayletras !== palavra || vidas > 0){
    if (arrayletras.includes(arrayletras) === false){
      
      vidas = vidas - 1
    }
    else if (arrayletras.includes(arrayletras) === true){
      console.log("Você acertou a letra")
    }

  }
  
    
function App() {
  return (
    
    <div className='tentativas'>
      <h1>Jogo da Forca</h1>
      <input type='text' id='letter' maxLength='1'placeholder ='Digite uma letra' className='imput-letter'></input>
      <br></br>
      <button onClick='Tentar()'>Advinhar</button>
      <p>
        Numero de tentantativas: {vidas}

      </p>
      <p>
        Numero de letras: {palavra.length}
      </p>
      <p>
        Letras já tentadas: {arrayletras}
      </p>
    </div>
    
    
  )
}
console.log(arrayletras.includes(arrayletras))

export default App;
