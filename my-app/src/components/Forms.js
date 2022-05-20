import Password from './Password'
import CaixaDeTexto from './CaixaDeTexto'
import Button from './Button'


function Forms(props) {
    return (
      <form action="formulário" >

    <>
    <CaixaDeTexto texto='Nome' ></CaixaDeTexto>
    <CaixaDeTexto texto='Sobrenome' ></CaixaDeTexto>
    <CaixaDeTexto texto='E-mail' ></CaixaDeTexto>
    <Password senha='Senha' ></Password>
    <Button teste='Enviar' cuidado='Dados enviados!'></Button>
    <Button teste='Cancelar' cuidado='Envio cancelado!'></Button>
    </>
      </form>
    );
  }

  export default Forms;