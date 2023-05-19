import React, { useEffect, useState } from 'react'
import Pagina from '@/components/Pagina'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { Bs } from 'react-icons'
import { BsFillTrashFill } from 'react-icons/bs'

const index = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        setCursos(getAll())
    }, [])

    function getAll(){
        return JSON.parse(window.localStorage.getItem('cursos')) || []
    }

    function excluir(id){
        
        const itens = getAll()
        itens.splice(id, 1)
        window.localStorage.setItem('cursos', JSON.stringify(itens))
        setCursos(itens)

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
                     < tr key={i} >
                        <td><BsFillTrashFill onClick={()=>excluir(i)} className='text-warning'/></td>
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