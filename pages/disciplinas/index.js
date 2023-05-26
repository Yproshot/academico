import React, { useEffect, useState } from 'react'
import Pagina from '@/components/Pagina'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { Bs } from 'react-icons'
import { Go } from 'react-icons'
import { GoPencil } from 'react-icons/go'
import { BsFillTrashFill } from 'react-icons/bs'
import Link from 'next/link'

const index = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        setDisciplinas(getAll())
    }, [ ])


    return (
        <Pagina titulo='Disciplinas'>

            <Button variant="primary mb-2" href='/disciplinas/form'>Novo</Button>
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

                    {disciplinas.map((item, i) => (
                        < tr key={i} >
                            <td>
                                <Link href={'/disciplinas/' + i}>
                                    <GoPencil type='Alterar' className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrashFill onClick={() => excluir(i)} className='text-warning' /></td>
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