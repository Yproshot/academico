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
  const [semestres, setSemestres] = useState([]);

  useEffect(() => {
      axios.get('/api/semestres').then( resultado => {
        setSemestres(resultado.data);
      })
  }, []);

  function getAll(){
    axios.get('/api/semestres').then(resultado => {
      setSemestres(resultado.data)
    })
  }

  function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/semestres/' + id)
      getAll()
    }
  }

  return (
    <Pagina titulo="Semestres">

      <Link href="/semestres/form" className="mb-2 btn btn-primary">
        <AiFillPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apagar</th>
            <th>Nome</th>
            <th>Data inicio</th>
            <th>Data fim</th>
          </tr>
        </thead>
        <tbody>
          {semestres.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/semestres/' + item.id}> 
                <BiEditAlt title='Alterar' className="text-primary" />
                </Link>
                {' '}
                <FaRegTrashAlt onClick={()=>excluir(item.id)} className="text-danger" />
              </td>
              <td>{item.nome}</td>
              <td>{item.data_inicio}</td>
              <td>{item.data_fim}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;