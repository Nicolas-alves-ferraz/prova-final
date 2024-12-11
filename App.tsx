import React, { useEffect, useState } from 'react';
import { Aluno } from '../interfaces/Aluno';
import { IMCs } from '../interfaces/IMCs';

const ListaAluno: React.FC = () => {
    const [aluno, setAluno] = useState<Aluno[]>([]);

    useEffect(() => {
        fetch('< http://localhost:5224/Cadrastar/Aluno>') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setAluno(data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Alunos</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {Aluno.map(Aluno => (
                        <tr key={aluno.id}>
                            <td>{aluno.id}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.sobrenome}</td>
                            <td>{new Date(produto.criadoEm).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaAluno;


const ListaIMCs: React.FC = () => {
  const [imcs, setIMCs] = useState<IMCs[]>([]);

  useEffect(() => {
      fetch('<http://localhost:5224/Cadrastar/IMCs>') 
          .then(response => {
              if (!response.ok) {
                  throw new Error('Erro na requisição: ' + response.statusText);
              }
              return response.json();
          })
          .then(data => {
              setIMCs(data);
          })
          .catch(error => {
              console.error('Erro:', error);
          });
  }, []);

  return (
      <div>
          <h1>Lista dos IMCs</h1>
          <table border="1">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Peso</th>
                      <th>Altura</th>
                      <th>Idade</th>
                      <th>Criado Em</th>
                  </tr>
              </thead>
              <tbody>
                  {IMCs.map(imcs => (
                      <tr key={imcs.id}>
                          <td>{imcs.id}</td>
                          <td>{imcs.Peso}</td>
                          <td>{imcs.Altura}</td>
                          <td>{imcs.Idade}</td>
                          <td>{new Date(imcs.criadoEm).toLocaleDateString()}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
};
export default CadrastarIMCs;