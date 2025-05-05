
import './App.css';
let palavra = "matapalito";
let vidas = 6
let arrayletras = []
function tentar() {
  document.getElementById('letter').value = document.getElementById('letter').value.toLowerCase()
  let arrayletras += document
}
function App() {
  return (
    
    <div class='tentativas'>
      <h1>Jogo da Forca</h1>
      <input type='text' id='letter' maxlength='1'placeholder ='Digite uma letra' class='imput-letter'></input>
      <br></br>
      <button onclick='tentar()'>Advinhar</button>
      <p>
        Numero de tentantativas: {vidas}

      </p>
      <p>
        Numero de letras: {palavra.length}
      </p>
    </div>
    
    
  )
}


export default App;
