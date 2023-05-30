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
import { get } from 'firebase/database'

const index = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll(){
        axios.get('/api/disciplinas').then( resultado => {
            setDisciplinas(resultado.data);
        })
    }
    
    function excluir(id){
        axios.delete('/api/disciplinas/' + id)
        getAll()
    }

    return (
        <Pagina titulo='Disciplinas'>

            <Button variant="primary mb-2" href='/disciplinas/form'>Novo</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> </th>
                        <th>Disciplinas</th>
                        <th>Duracao</th>
                    </tr>
                </thead>
                <tbody>

                    {disciplinas.map((item) => (
                        < tr key={item.id} >
                            <td>
                                <Link href={'/disciplinas/'}>
                                    <GoPencil type='Alterar' className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrashFill onClick={() => excluir(item.id)} className='text-warning' /></td>
                            <td>{item.disciplinas}</td>
                            <td>{item.duracao}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>

        </Pagina >
    )
}

export default index