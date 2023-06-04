import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const form = () => {
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()
  
    useEffect(() => {
      if(query.id){
        axios.get('/api/curso/' + query.id).then(resultado => {
          const curso = resultado.data
          
          
          for(let atributo in curso){
            setValue(atributo, curso[atributo])
          }
        })
      }
    }, [query.id]);
  
    function salvar(dados){
      axios.put('/api/curso/' + query.id, dados)
      Push('/curso/')
  
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração:</Form.Label>
                    <Form.Control type="text" {...register('duracao')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="Modalidade">
                    <Form.Label>Modalidade:</Form.Label>
                    <Form.Control type="text" {...register('modalidade')} />
                </Form.Group>


                <div className='text-center'>

                    <Link className='btn btn-danger' href="/cursos">
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