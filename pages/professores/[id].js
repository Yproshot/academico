import Pagina from "@/components/Pagina";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsSave } from "react-icons/bs"
import { AiOutlineRollback } from "react-icons/ai"
import axios from "axios";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    if(query.id){
      axios.get('/api/professores/' + query.id).then(resultado => {
        const professores = resultado.data
        
        
        for(let atributo in professores){
          setValue(atributo, professores[atributo])
        }
      })
    }
  }, [query.id]);

  function salvar(dados){
    axios.put('/api/professores/' + query.id, dados)
    push('/professores/')

  }

  return (
    <Pagina titulo="Professores">
<Form>
                <Form.Group className="mb-3" controlId="nome">
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
                
                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salario:</Form.Label>
                    <Form.Control type="text" {...register('salario')} />
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
      <Button variant="primary" onClick={handleSubmit(salvar)}>
        <BsSave className="me-2"/>
        Salvar
      </Button>
      <Link className="ms-2 btn btn-danger" href={'/professores'}>
        <AiOutlineRollback className="me-2"/>
        Voltar
      </Link>

    </Form>
    </Pagina>
  );
};

export default form;