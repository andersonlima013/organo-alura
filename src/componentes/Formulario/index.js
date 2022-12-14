import './index.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = () => {

    const times = [
        'Projetos',
        'Cadastro',
        'Orçamento',
        'PCP'
    ]
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome =)" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} placeholder="Escolha o seu time" />
            </form>
        </section>
    )
}

export default Formulario