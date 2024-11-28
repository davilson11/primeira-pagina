import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Versionando minha aplicação web</h1>
  <img src="https://cdn.meutimao.com.br/_upload/noticia/2016/04/torcida_do_corinthians_foi_responsavel_por_n4.jpg" >
  </div>
`

setupCounter(document.querySelector('#counter'))
