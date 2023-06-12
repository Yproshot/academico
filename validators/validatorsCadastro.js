const validatorCadastro = {
  
    nome: {
      required: "Campo obrigatório!",
      minLength: {
        value: 5,
        message: "Mínimo: 5 caracteres!",
      },
      maxLength: {
        value: 70,
        message: "Máximo: 70 caracteres!",
      },
      pattern: {
        value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        message: "Digite somente letras!",
      },
    },
  
    cpf: {
      required: "Campo obrigatório!",
      maxLength: {
        value: 11,
        message: "Máximo: 11 caracteres!",
      },
      pattern: {
        value: /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/,
        message: "Digite somente números!",
      },
    },
  
    matricula: {
      minLength: {
        value: 11,
        message: "A matricula possui 11 caracteres!",
      },
      maxLength: {
        value: 11,
        message: "A matricula possui 11 caracteres!",
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "Digite somente números!",
      },
    },
  
    email: {
      maxLength: {
        value: 70,
        message: "Máximo: 70 caracteres!",
      },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: "Digite um e-mail válido!",
      },
    },
  
    telefone: {
      maxLength: {
        value: 20,
        message: "Máximo: 20 caracteres!",
      },
      pattern: {
        value: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\s?\d|[2-9])\d{3})\-?(\d{4}))$/,
        message: "Numero invalido!",
      },
    },
  
    cep: {
      minLength: {
        value: 9,
        message: "O CEP possui 8 digitos não se esqueça do "-" (xxxxx-xxx) !",
      },
      maxLength: {
        value: 9,
        message: "O CEP possui 8 digitos não se esqueça do "-" (xxxxx-xxx) !",
      },
      pattern: {
        value: /^[0-9]{5}-[0-9]{3}$/,
        message: "Digite apenas números!",
      },
    },
  
    logradouro: {
      minLength: {
        value: 5,
        message: "Mínimo: 5 caracteres!",
      },
      maxLength: {
        value: 60,
        message: "Máximo: 60 caracteres!",
      },
    },
  
    complemento: {
      minLength: {
        value: 5,
        message: "Mínimo: 5 caracteres!",
      },
      maxLength: {
        value: 100,
        message: "Máximo: 100 caracteres!",
      },
    },
  
    numero: {
      minLength: {
        value: 1,
        message: "Mínimo: 1 caracteres!",
      },
      maxLength: {
        value: 20,
        message: "Máximo: 20 caracteres!",
      },
      pattern: {
        value: /[0-9]+$/,
        message: "Digite apenas números!",
      },
    },
  
    bairro: {
      minLength: {
        value: 2,
        message: "Mínimo: 2 caracteres!",
      },
      maxLength: {
        value: 100,
        message: "Máximo: 100 caracteres!",
      },
    },

    duracao: {
        required: "Campo obrigatório!",
        minLength: {
          value: 1,
          message: "Mínimo: 1 caractere!",
        },
        maxLength: {
          value: 2,
          message: "Máximo: 2 caracteres!",
        },
      },

      modalidade: {
        required: "Campo obrigatório!",
        minLength: {
          value: 3,
          message: "Mínimo: 3 caracteres!",
        },
        maxLength: {
          value: 15,
          message: "Máximo: 15 caracteres!",
        },
      },

      curso: {
        required: "Campo obrigatório!",
        minLength: {
          value: 3,
          message: "Mínimo: 3 caracteres!",
        },
        maxLength: {
          value: 40,
          message: "Máximo: 40 caracteres!",
        },
        pattern: {
          value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
          message: "Digite somente letras!",
        },
      },

      salario: {
        minLength: {
          value: 4,
          message: "Mínimo: 4 caracteres!",
        },
        maxLength: {
          value: 8,
          message: "Máximo: 8 caracteres!",
        },
        pattern: {
          value: /[0-9.]+$/,
          message: "Digite somente números!",
        },
      },

      nomeSala: {
        required: "Campo obrigatório!",
        minLength: {
          value: 2,
          message: "Mínimo: 2 caracteres!",
        },
        maxLength: {
          value: 20,
          message: "Máximo: 20 caracteres!",
        },
      },
    
      capacidadeSala: {
        minLength: {
          value: 1,
          message: "Mínimo: 1 caracteres!",
        },
        maxLength: {
          value: 4,
          message: "Máximo: 4 caracteres!",
        },
        pattern: {
          value: /^[0-9]+$/,
          message: "Digite apenas números!",
        },
      },
    
      tipoSala: {
        required: 'Campo Obrigatório!',
        minLength: {
          value: 1,
          message: "Mínimo: 1 caracteres!",
        },
        maxLength: {
          value: 10,
          message: "Máximo: 10 caracteres!",
        },
      },

      nomeSemestre: {
        required: "Campo obrigatório!",
        minLength: {
          value: 1,
          message: "Mínimo: 1 caracteres!",
        },
        maxLength: {
          value: 50,
          message: "Máximo: 50 caracteres!",
        },
      },
    
      datainicio: {
       required: 'Campo Obrigatório',
       pattern: {
        value: /^(((((0[1-9])|(1\d)|(2[0-8]))\/((0[1-9])|(1[0-2])))|((31\/((0[13578])|(1[02])))|((29|30)\/((0[1,3-9])|(1[0-2])))))\/((20[0-9][0-9])|(19[0-9][0-9])))|((29\/02\/(19|20)(([02468][048])|([13579][26]))))$/
       }
      },
    
      datafim: {
       required: 'Campo Obrigatório',
       pattern: {
        value: /^(((((0[1-9])|(1\d)|(2[0-8]))\/((0[1-9])|(1[0-2])))|((31\/((0[13578])|(1[02])))|((29|30)\/((0[1,3-9])|(1[0-2])))))\/((20[0-9][0-9])|(19[0-9][0-9])))|((29\/02\/(19|20)(([02468][048])|([13579][26]))))$/
       }
    
    },
    
  };
  
  export default validatorCadastro;