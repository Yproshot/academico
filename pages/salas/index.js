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
  const [salas, setSalas] = useState([]);

  useEffect(() => {
      axios.get('/api/salas').then( resultado => {
        setSalas(resultado.data);
      })
  }, []);

  function getAll(){
    axios.get('/api/salas').then(resultado => {
      setSalas(resultado.data)
    })
  }

  function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/salas/' + id)
      getAll()
    }
  }

  return (
    <Pagina titulo="Salas">

      <Link href="/salas/form" className="mb-2 btn btn-primary">
        <AiFillPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apagar</th>
            <th>Nome</th>
            <th>Capacidade</th>
            <th>tipo</th>
          </tr>
        </thead>
        <tbody>
          {salas.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/salas/' + item.id}> 
                <BiEditAlt title='Alterar' className="text-primary" />
                </Link>
                {' '}
                <FaRegTrashAlt onClick={()=>excluir(item.id)} className="text-danger" />
              </td>
              <td>{item.nome}</td>
              <td>{item.capacidade}</td>
              <td>{item.tipo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;