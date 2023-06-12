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
      axios.get('/api/semestres/' + query.id).then(resultado => {
        const semestres = resultado.data
        
        
        for(let atributo in semestres){
          setValue(atributo, semestres[atributo])
        }
      })
    }
  }, [query.id]);

  function salvar(dados){
    axios.put('/api/semestres/' + query.id, dados)
    push('/semestres/')

  }

  return (
    <Pagina titulo="Semestres">
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
                    <Form.Control maxLength={10} type="text" {...register('data_inicio', validatorCadastro.datainicio)} />
                </Form.Group>
                {errors.datainicio && (
                    <span className="error-message bg-dark text-danger">
                      {errors.datainicio.message}
                    </span>
                  )}


                <Form.Group className="mb-3" controlId="data_fim">
                    <Form.Label>Data fim:</Form.Label>
                    <Form.Control maxLength={10} type="text" {...register('data_fim', validatorCadastro.datafim)} />
                </Form.Group>
                {errors.datafim && (
                    <span className="error-message bg-dark text-danger">
                      {errors.datafim.message}
                    </span>
                  )}

      <Button variant="primary" onClick={handleSubmit(salvar)}>
        <BsSave className="me-2"/>
        Salvar
      </Button>
      <Link className="ms-2 btn btn-danger" href={'/semestres'}>
        <AiOutlineRollback className="me-2"/>
        Voltar
      </Link>

    </Form>
    </Pagina>
  );
};

export default form;