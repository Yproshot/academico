import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'

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
        <Pagina titulo="Disciplinas">

            <Link href="/disciplinas/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map( item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/disciplinas/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.curso}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index