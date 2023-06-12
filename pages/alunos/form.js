import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import { mask } from 'remask'

const form = () => {
    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    function salvar(dados) {

    axios.post('/api/alunos', dados)
    push('/alunos')
  }

    function handlechange(event){
      const name = event.target.name
      const valor = event.target.value
      const mascara = event.target.getAttribute('mask')

      setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo='Alunos'>
                       <Form>
                       <Form.Group className="mb-3" controlId="professores">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome', validatorCadastro.nome)} />
                </Form.Group>
                {errors.nome && (
                    <span className="error-message bg-dark text-danger">
                      {errors.nome.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control mask='999.999.999-99' type="text" {...register('cpf', validatorCadastro.cpf)}
                    onchange={handlechange} />
                </Form.Group>
                {errors.cpf && (
                    <span className="error-message bg-dark text-danger">
                      {errors.cpf.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula:</Form.Label>
                    <Form.Control type="text" {...register('matricula', validatorCadastro.matricula)} />
                </Form.Group>
                {errors.matricula && (
                    <span className="error-message bg-dark text-danger">
                      {errors.matricula.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" {...register('email', validatorCadastro.email)} />
                </Form.Group>
                {errors.email && (
                    <span className="error-message bg-dark text-danger">
                      {errors.email.message}
                    </span>
                  )}
                
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control type="text" {...register('telefone', validatorCadastro.telefone)} />
                </Form.Group>
                {errors.telefone && (
                    <span className="error-message bg-dark text-danger">
                      {errors.telefone.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control type="text" {...register('cep', validatorCadastro.cep)} />
                </Form.Group>
                {errors.cep && (
                    <span className="error-message bg-dark text-danger">
                      {errors.cep.message}
                    </span>
                  )}
                
                <Form.Group className="mb-3" controlId="logadouro">
                    <Form.Label>Logradouro:</Form.Label>
                    <Form.Control type="text" {...register('logradouro', validatorCadastro.logradouro)} />
                </Form.Group>
                {errors.logradouro && (
                    <span className="error-message bg-dark text-danger">
                      {errors.logradouro.message}
                    </span>
                  )}
                
                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento:</Form.Label>
                    <Form.Control type="text" {...register('complemento', validatorCadastro.complemento)} />
                </Form.Group>
                {errors.complemento && (
                    <span className="error-message bg-dark text-danger">
                      {errors.complemento.message}
                    </span>
                  )}
                
                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero:</Form.Label>
                    <Form.Control type="text" {...register('numero', validatorCadastro.numero)} />
                </Form.Group>
                {errors.numero && (
                    <span className="error-message bg-dark text-danger">
                      {errors.numero.message}
                    </span>
                  )}
                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro:</Form.Label>
                    <Form.Control type="text" {...register('bairro', validatorCadastro.bairro)} />
                </Form.Group>
                {errors.bairro && (
                    <span className="error-message bg-dark text-danger">
                      {errors.bairro.message}
                    </span>
                  )}


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