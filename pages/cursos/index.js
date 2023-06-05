import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { Fa } from "react-icons";
import { FaRegTrashAlt } from "react-icons/Fa"
import { BiEditAlt } from "react-icons/Bi"
import axios from "axios";

const index = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
      axios.get('/api/cursos').then( resultado => {
        setCursos(resultado.data);
      })
  }, []);

  function getAll(){
    axios.get('/api/cursos').then(resultado => {
      setCursos(resultado.data)
    })
  }

  function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/cursos/' + id)
      getAll()
    }
  }

  return (
    <Pagina titulo="Cursos">

      <Link href="/cursos/form" className="mb-2 btn btn-primary">
        <AiFillPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apagar</th>
            <th>Nome</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/cursos/' + item.id}> 
                <BiEditAlt title='Alterar' className="text-primary" />
                </Link>
                {' '}
                <FaRegTrashAlt onClick={()=>excluir(item.id)} className="text-danger" />
              </td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>
              <td>{item.modalidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;