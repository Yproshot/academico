import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'

const form = () => {
    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {

    axios.post('/api/semestres', dados)
    push('/semestres')


    }
    return (
        <Pagina titulo='Semestres'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="data_inicio">
                    <Form.Label>Data Inicio:</Form.Label>
                    <Form.Control type="text" {...register('data_inicio')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="data_fim">
                    <Form.Label>Data fim:</Form.Label>
                    <Form.Control type="text" {...register('data_fim')} />
                </Form.Group>


                <div className='text-center'>

                    <Link className='btn btn-danger' href="/semestres">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar

                    </Link>
                    <Button className='ms-2' variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className=' me-2' />
                        Salvar
                    </Button>
                </div>
            </Form>

        </Pagina>
    )
}

export default form