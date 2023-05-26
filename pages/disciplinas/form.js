import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const form = () => {
    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados){

        axios.post('/api/disciplinas', dados)


    }
    return (
        <Pagina titulo='Disciplinas'>
            <Form>
                <Form.Group className="mb-3" controlId="disciplinas">
                    <Form.Label>Disciplinas:</Form.Label>
                    <Form.Control type="text" {...register('disciplinas')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração:</Form.Label>
                    <Form.Control type="text" {...register('duracao')} />
                </Form.Group>


                <div className='text-center'>

                <Link className='btn btn-danger' href="/disciplinas">
                    <AiOutlineArrowLeft className="me-2"/>
                    Voltar
                
                </Link>
                <Button className='ms-2' variant="success" onClick={handleSubmit(salvar) }>
                    <BsCheckLg className=' me-2'/>
                    Salvar
                </Button>
                </div>
            </Form>

        </Pagina>
    )
}

export default form