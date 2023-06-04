import React, { useEffect, useState } from 'react'
import Pagina from '@/components/Pagina'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { Bs } from 'react-icons'
import { Go } from 'react-icons'
import { GoPencil } from 'react-icons/go'
import { BsFillTrashFill } from 'react-icons/bs'
import Link from 'next/link'
import axios from 'axios'

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
        <Pagina titulo='Cursos'>

            <Button variant="primary mb-2" href='/cursos/form'>Novo</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> </th>
                        <th>Nome</th>
                        <th>Duracao</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>

                    {cursos.map((item, i) => (
                     < tr key= {i} >
                        <td>
                            <Link href={'/cursos/' + item.id}>
                            <GoPencil type='Alterar' className='text-primary'/>
                            </Link>
                            {' '}
                            <BsFillTrashFill onClick={()=>excluir(i)} className='text-warning'/></td>
                        <td>{item.nome}</td>
                        <td>{item.duracao}</td>
                        <td>{item.modalidade}</td>
                    </tr>
                   ))}

            </tbody>
        </Table>

        </Pagina >
    )
}

export default index