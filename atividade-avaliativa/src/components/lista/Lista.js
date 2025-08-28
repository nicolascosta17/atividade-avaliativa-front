import React, { useState } from "react";
import "./Lista.css";

function Lista() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [lista, setLista] = useState([]);

  const adicionar = () => {
    if (nome.trim() === "" || idade.trim() === "") return;
    const idadeNum = parseInt(idade, 10);
    if (Number.isNaN(idadeNum) || idadeNum < 0) return;

    const novoItem = { nome: nome.trim(), idade: idadeNum };
    setLista((prev) => [...prev, novoItem]);
    setNome("");
    setIdade("");
  };

  const salvarLista = () => {
    const blob = new Blob([JSON.stringify(lista, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lista-colegas.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <h1>Cadastro de Participantes</h1>

      <input
        type="text"
        placeholder="Digite o nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Digite a idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <button onClick={adicionar}>Adicionar</button>

      <h2>Lista de Participantes</h2>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.idade} anos
          </li>
        ))}
      </ul>

      {lista.length > 0 && (
        <button onClick={salvarLista} className="saveButton">
          Salvar Lista
        </button>
      )}
    </div>
  );
}

export default Lista;
