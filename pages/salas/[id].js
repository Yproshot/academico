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
      axios.get('/api/salas/' + query.id).then(resultado => {
        const salas = resultado.data
        
        
        for(let atributo in salas){
          setValue(atributo, salas[atributo])
        }
      })
    }
  }, [query.id]);

  function salvar(dados){
    axios.put('/api/salas/' + query.id, dados)
    push('/salas/')

  }

  return (
    <Pagina titulo="Salas">
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

      <Button variant="primary" onClick={handleSubmit(salvar)}>
        <BsSave className="me-2"/>
        Salvar
      </Button>
      <Link className="ms-2 btn btn-danger" href={'/salas'}>
        <AiOutlineRollback className="me-2"/>
        Voltar
      </Link>

    </Form>
    </Pagina>
  );
};

export default form;