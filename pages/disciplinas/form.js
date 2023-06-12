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
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    function salvar(dados) {

    axios.post('/api/disciplinas', dados)
    push('/disciplinas')


    }
    return (
        <Pagina titulo='Disciplinas'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome', validatorCadastro.nome)} />
                </Form.Group>
                {errors.nome && (
                    <span className="error-message bg-dark text-danger">
                      {errors.nome.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="curso">
                    <Form.Label>Curso:</Form.Label>
                    <Form.Control type="text" {...register('curso', validatorCadastro.curso)} />
                </Form.Group>
                {errors.curso && (
                    <span className="error-message bg-dark text-danger">
                      {errors.curso.message}
                    </span>
                  )}


                <div className='text-center'>

                    <Link className='btn btn-danger' href="/disciplinas">
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