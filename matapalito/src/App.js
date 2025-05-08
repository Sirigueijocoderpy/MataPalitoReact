
import './App.css';

let palavra = '';
let palavra_arr = palavra
let vitoria = false
let vidas = 10
let arrayletras = []
let cemiterio = []

for (let i = 0; i < palavra.length; i++) {
  arrayletras[i] = ' '

}

function Tentar() {

  let letra = document.getElementById('letter').value.toLowerCase()

  if (vidas > 0) {

    if (letra == '') {
      return

    }

    if (arrayletras.indexOf(letra) != -1 || cemiterio.indexOf(letra) != -1) {
      return

    }

    if (palavra.indexOf(letra) != -1) {

      while (palavra.indexOf(letra) != -1) {
        let indice = palavra.indexOf(letra)

        arrayletras[indice] = letra

        palavra = palavra.replace(letra, ' ')

      }

      document.getElementById('resposta').innerHTML = 'Resposta: '

      for (let i = 0; i < arrayletras.length; i++) {
        document.getElementById('resposta').innerHTML += arrayletras[i]

      }

    } else {

      vidas -= 1
      cemiterio.push(letra)

      document.getElementById('vidas').innerHTML = `Número de tentativas: ${vidas}`
      document.getElementById('cemiterio').innerHTML = `Letras já testadas: ${cemiterio}`

    }

    Vitoria()

    if (vitoria == true) {
      alert('Você venceu! \n' + 'A palavra era: ' + palavra_arr)
      window.location.reload()

    }

  } else {

    alert('Suas vidas acabaram!')

  }

}


function Vitoria() {

  for (let i = 0; i < palavra_arr.length; i++) {
    if (arrayletras[i] == palavra_arr[i]) {
      vitoria = true

    } else {
      vitoria = false
      break
    }

  }

}



function App() {
  return (
    <>
    <div className='container'>
      

      <h1 className='Titulo'>Mata Palito</h1>

      <input type='text' id='letter' maxLength='1' placeholder='Digite uma letra' className='imput-letter'></input>

      <br></br>

      <button className='btn' onClick={Tentar}>Advinhar</button>

      <p id='resposta'>
        Resposta: 
      </p>

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
    </>

  )
}

export default App;