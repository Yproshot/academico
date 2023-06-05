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

    axios.post('/api/alunos', dados)
    push('/alunos')


    }
    return (
        <Pagina titulo='Alunos'>
                       <Form>
                <Form.Group className="mb-3" controlId="professores">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control type="text" {...register('cpf')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula:</Form.Label>
                    <Form.Control type="text" {...register('matricula')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>

                
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control type="text" {...register('telefone')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control type="text" {...register('cep')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="logadouro">
                    <Form.Label>Logadouro:</Form.Label>
                    <Form.Control type="text" {...register('logadouro')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento:</Form.Label>
                    <Form.Control type="text" {...register('complemento')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero:</Form.Label>
                    <Form.Control type="text" {...register('numero')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro:</Form.Label>
                    <Form.Control type="text" {...register('bairro')} />
                </Form.Group>


                <div className='text-center'>

                    <Link className='btn btn-danger' href="/alunos">
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