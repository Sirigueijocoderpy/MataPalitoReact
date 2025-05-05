
import './App.css';
let palavra = "matapalito";
let vidas = 6
let arrayletras = []
let cemiterio = []

for (let i = 0; i < palavra.length; i++) {
  arrayletras[i] = ''

}

function Tentar() {

  let letra = document.getElementById('letter').value.toLowerCase()

  if (vidas > 0) {

    if (palavra.indexOf(letra) == '') {
      return

    }

    if (arrayletras.indexOf(letra) != -1 || cemiterio.indexOf(letra) != -1){
      return

    }

    if (palavra.indexOf(letra) != -1) {

      while (palavra.indexOf(letra) != -1) {
        let indice = palavra.indexOf(letra)

        arrayletras[indice] = letra

        palavra = palavra.replace(letra, ' ')

      }

    } else {

      vidas -= 1
      cemiterio.push(letra)

      document.getElementById('vidas').innerHTML = `Número de tentativas: ${vidas}`
      document.getElementById('cemiterio').innerHTML = `Letras já testadas: ${cemiterio}`

    }

  } else {

    alert('Suas vidas acabaram!')

  }

}



function App() {
  return (

    <div className='tentativas'>

      <h1>Jogo da Forca</h1>

      <input type='text' id='letter' maxLength='1' placeholder='Digite uma letra' className='imput-letter'></input>

      <br></br>

      <button onClick={Tentar}>Advinhar</button>

      <p id='vidas'>
        Número de tentativas: {vidas}

      </p>

      <p>
        Número de letras: {palavra.length}
      </p>

      <p id='cemiterio'>
        Letras já testadas:
      </p>

    </div>


  )
}

export default App;
