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
import { mask } from 'remask'

const form = () => {
    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    function salvar(dados) {

    axios.post('/api/semestres', dados)
    push('/semestres')


    }

    function handlechange(event){
      const name = event.target.name
      const valor = event.target.value
      const mascara = event.target.getAttribute('mask')
  
      setValue(name, mask(valor, mascara));
    }


    return (
        <Pagina titulo='Semestres'>
            <Form>
            <Form.Group className="mb-3" controlId="semestres">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome', validatorCadastro.nomeSemestre)} />
                </Form.Group>
                {errors.nomeSemestre && (
                    <span className="error-message bg-dark text-danger">
                      {errors.nomeSemestre.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="data_inicio">
                    <Form.Label>Data Inicio:</Form.Label>
                    <Form.Control mask='99/99/9999' type="text" {...register('data_inicio', validatorCadastro.datainicio)} 
                    onChange={handlechange}/>
                </Form.Group>
                {errors.datainicio && (
                    <span className="error-message bg-dark text-danger">
                      {errors.datainicio.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="data_fim">
                    <Form.Label>Data fim:</Form.Label>
                    <Form.Control mask='99/99/9999' type="text" {...register('data_fim', validatorCadastro.datafim)} 
                    onChange={handlechange}/>
                </Form.Group>
                {errors.datafim && (
                    <span className="error-message bg-dark text-danger">
                      {errors.datafim.message}
                    </span>
                  )}


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