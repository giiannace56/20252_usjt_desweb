import './styles.css'
const App = () => {
  const estilosDoBotao ={marginTop: 12, paddingTop: 8, paddingBottom: 8, borderRadius: 8, width: '100%', backgroundColor: 'blueviolet', color: 'white'}
  const textoDoRotulo = 'Nome:'
  const obterTextoDoBotao = () => 'Enviar'
  const aoClicar = () => alert('Clicou no botão')
  return(
    <div style={{margin: 'auto', width: 768, backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8}}>
      <label
      className='rotulo'
      htmlFor="nome"
      style={{display: 'block', marginBottom: 4}}
      >
       {textoDoRotulo}
      </label>
      <input 
      style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', borderRadius: 8, width: '100%'}}
      type="text" />
      <button
      onClick={() => aoClicar()}
      style={{...estilosDoBotao}}>
      {obterTextoDoBotao()}
       </button>
    </div>
  )
}

export default App