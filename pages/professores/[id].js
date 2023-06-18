import Pagina from "@/components/Pagina";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsSave } from "react-icons/bs"
import { AiOutlineRollback } from "react-icons/ai"
import axios from "axios";
import validatorCadastro from "@/validators/validatorsCadastro";
import { mask } from "remask";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

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

  function handlechange(event){
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(valor, mascara));
  }

  return (
    <Pagina titulo="Professores">
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


                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control mask='999.999.999-99' type="text" {...register('cpf', validatorCadastro.cpf)} 
                    onChange={handlechange}/>
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
                
                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salario:</Form.Label>
                    <Form.Control type="text" {...register('salario', validatorCadastro.salario)} />
                </Form.Group>
                {errors.salario && (
                    <span className="error-message bg-dark text-danger">
                      {errors.salario.message}
                    </span>
                  )}
                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="text" {...register('email', validatorCadastro.email)} />
                </Form.Group>
                {errors.email && (
                    <span className="error-message bg-dark text-danger">
                      {errors.email.message}
                    </span>
                  )}

                
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control mask='(99)99999-9999' type="text" {...register('telefone', validatorCadastro.telefone)} 
                    onChange={handlechange}/>
                </Form.Group>
                {errors.telefone && (
                    <span className="error-message bg-dark text-danger">
                      {errors.telefone.message}
                    </span>
                  )}

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control mask='99.999-999' type="text" {...register('cep', validatorCadastro.cep)} 
                    onChange={handlechange}/>
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