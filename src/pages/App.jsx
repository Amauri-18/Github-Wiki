import { api } from "../services/api";

import { useState } from "react";

import Input from "../components/input";
import Button from "../components/Button";
import ItemRepo from "../components/itemRepo/ItemRepo";

import github from "../assets/background.svg";

import { Container } from "./styles";

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  // ------------------------------------------------------------------------------------------------------------------
  const handleSearchRepo = async () => {
    if (currentRepo === "") {
      alert("Informe um repositório!");
      return;
    }

    let response = {};

    try {
      response = await api.get(`repos/${currentRepo}`);
      console.log(response.data);

      if (response.status === 200) {
        const isExist = repos.find((repo) => repo.id === response.data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, response.data]);
          setCurrentRepo("");
        } else {
          alert("Repositório não encontrado!");
        }
      }
    } catch (error) {
      alert('Repositório não encontrado...')
      setCurrentRepo('');
    }
  };
  // ------------------------------------------------------------------------------------------------------------------

  const handleRemoveRepo = (id) => {

    setRepos(repos.filter((repo) => repo.id !== id))
  }
  // ------------------------------------------------------------------------------------------------------------------

  return (
    <Container>
      <img src={github} alt="github logo" width="72" height="72" />

      <Input
        text={currentRepo}
        handleOnChange={(e) => setCurrentRepo(e.currentTarget.value)}
        />
      <Button handleOnClick={handleSearchRepo} />

      {repos.map((repo) => (
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/>
      ))}
    </Container>
  );
}

export default App;

// amauri-18/Desafio-de-Projeto---Calculadora 
// pablohdev/dio-clone
