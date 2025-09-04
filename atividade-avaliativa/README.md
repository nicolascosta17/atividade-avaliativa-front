# Projeto React - Cadastro de Participantes

Este projeto foi desenvolvido em **React.js** com o objetivo de criar uma aplicação simples de **cadastro de participantes**.  
O usuário pode adicionar o **nome** e a **idade** de cada participante, visualizar a lista em tempo real e também **baixar um arquivo JSON** com todos os dados cadastrados.  

---

## Instalação e Configuração

# Instalação Node.js
Foi necessário instalar o **Node.js v22.19.0 (LTS)**, que permite executar código JavaScript fora do navegador, no lado do servidor.  

# Criar o projeto
No terminal (CMD), execute o comando: npx create-react-app nome_projeto

Esse comando cria uma nova aplicação React do zero.  

 O `npx` é um executor de pacotes para Node.js que faz parte do `npm` (Node Package Manager).  

# Entrar na pasta do projeto

cd .\<nome_projeto>


# Abrir no VS Code

No terminal digite (tem que estar dentro do repositório da pasta): code .

Ou abra manualmente procurando a pasta e selecionando "Abrir com VS Code" (ou outra IDE).  

# Rodar a aplicação

npm start a aplicação será aberta em `http://localhost:3000`.

# Estrutura do Projeto

src/
│── components/
│   └── lista/
│       ├── Lista.js     # Componente principal da lista
│       ├── Lista.css    # Estilização do componente
│
│── App.js               # Importa e renderiza o componente Lista
│── index.js             # Ponto de entrada do React

# Lista.js

Dentro da pasta `src/components/lista/` criamos o **componente Lista** que é responsável por cadastrar os participantes.  

# Funcionalidades:
  Adicionar nome e idade de um participante.  
  Mostrar a lista completa em tempo real.  
  Baixar a lista em formato `.json`.  

# Estados (useState):
- **nome** → valor digitado no campo de nome.  
- **idade** → valor digitado no campo de idade.  
- **lista** → array com todos os participantes cadastrados.  

# Funções:
- **adicionar()** → valida os campos e insere um novo participante na lista.  
- **salvarLista()** → gera um arquivo JSON e baixa no computador com todos os cadastros.  

---

# Estilo (Lista.css)

O CSS foi criado para deixar a aplicação simples e agradável:  
- Container centralizado com sombra e bordas arredondadas.  
- Inputs com borda e padding para melhor usabilidade.  
- Botão azul (**Adicionar**) e botão verde (**Salvar Lista**).  
- Lista sem marcadores (`list-style: none`).  

# Exemplo de Uso
  Digite o **nome** e a **idade** nos campos de entrada.  
  Clique em **Adicionar**.  
  O participante será exibido na lista.  
  Após adicionar todos, clique em **Salvar Lista**.  
  Será baixado um arquivo `lista-colegas.json` com todos os participantes.  

Exemplo do arquivo gerado:
[
  {
    "nome": "Ana",
    "idade": 22
  },
  {
    "nome": "Carlos",
    "idade": 30
  }
]

---

# Conclusão

Este projeto demonstra conceitos importantes de **React**:  
- Manipulação de **estado com Hooks**.  
- **Renderização condicional** (mostrar botão de salvar apenas quando existir lista).  
- **Manipulação de arquivos** para salvar dados localmente no navegador.  

É um ótimo exercício para iniciantes aprenderem **como estruturar um projeto React**, criar **componentes reutilizáveis** e aplicar **CSS modularizado**.  
