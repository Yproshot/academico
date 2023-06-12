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

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if(query.id){
      axios.get('/api/disciplinas/' + query.id).then(resultado => {
        const disciplinas = resultado.data
        
        
        for(let atributo in disciplinas){
          setValue(atributo, disciplinas[atributo])
        }
      })
    }
  }, [query.id]);

  function salvar(dados){
    axios.put('/api/disciplinas/' + query.id, dados)
    push('/disciplinas/')

  }

  return (
    <Pagina titulo="Disciplinas">
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

      <Button variant="primary" onClick={handleSubmit(salvar)}>
        <BsSave className="me-2"/>
        Salvar
      </Button>
      <Link className="ms-2 btn btn-danger" href={'/disciplinas'}>
        <AiOutlineRollback className="me-2"/>
        Voltar
      </Link>

    </Form>
    </Pagina>
  );
};

export default form;