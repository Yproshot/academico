import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import validatorCadastro from '@/validators/validatorsCadastro'

const form = () => {
    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    function salvar(dados) {

    axios.post('/api/salas', dados)
    push('/salas')


    }
    return (
        <Pagina titulo='Salas'>
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome', validatorCadastro.nomeSala)} />
                </Form.Group>
                {errors.nomeSala && (
                    <span className="error-message bg-dark text-danger">
                      {errors.nomeSala.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="capacidade">
                    <Form.Label>Capacidade:</Form.Label>
                    <Form.Control type="text" {...register('capacidade', validatorCadastro.capacidadeSala)} />
                </Form.Group>
                {errors.capacidadeSala && (
                    <span className="error-message bg-dark text-danger">
                      {errors.capacidadeSala.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo:</Form.Label>
                    <Form.Control type="text" {...register('tipo', validatorCadastro.tipoSala)} />
                </Form.Group>
                {errors.tipoSala && (
                    <span className="error-message bg-dark text-danger">
                      {errors.tipoSala.message}
                    </span>
                  )}

                <div className='text-center'>

                    <Link className='btn btn-danger' href="/salas">
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