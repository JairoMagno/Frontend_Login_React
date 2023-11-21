import frase_login from "../../../data/frase_login.json"
import { Button } from "react-bootstrap";
import { Form, InputGroup } from 'react-bootstrap';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineVpnKey } from "react-icons/md";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './formulario.scss';

function Formulario() {

    const formik = useFormik({
      initialValues: {                          //Valores inicias
        email: '',
        senha: ''
      },
      validationSchema: Yup.object({            //Validação de esquema com Yup
        email: Yup.string('Informe o email')
          .email('Email inválido!')
          .required('Campo Obrigatório!'),
        senha: Yup.string('Informe a senha')
          .min(6, 'Muito Curto!')
          .max(12, 'Muito Longo!')
          .required('Campo Obrigatório!')
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 3))  //Identação de 3 casas
      }
    });

    return (
        <div className="formulario">
          <h1>Login</h1>
          <p>{frase_login.welcome}</p>

          <Form onSubmit={formik.handleSubmit}>
            <div className="campo">
              <Form.Group className="mb-3" >
                <Form.Label className='fw-bold'>Email</Form.Label>
                <InputGroup className="input">
                  <InputGroup.Text id="basic-addon1">
                    <HiOutlineMail />
                  </InputGroup.Text>
                  <Form.Control type="email" 
                                name="email"
                                id="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="Digite seu email" />
                </InputGroup>
              </Form.Group>
              {formik.touched.email && formik.errors.email ? (
                <div className="error-message">
                  {formik.errors.email}
                </div>
                ) : null}
            </div>

            <div className="campo">
              <Form.Group className="mb-3" >
                <Form.Label className='fw-bold'>Senha</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <MdOutlineVpnKey />
                  </InputGroup.Text>
                  <Form.Control type="password" 
                                name="senha"
                                id="senha"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.senha}
                                placeholder="Digite sua senha" />
                </InputGroup>
              </Form.Group>
              {formik.touched.senha && formik.errors.senha ? (
                <div className="error-message">
                  {formik.errors.senha}
                </div>
                ) : null}
            </div>
        
            <div className="d-grid gap-2" id="botao">
              <Button variant="primary" type="submit" >
                  Entrar
              </Button>
            </div>

            <a href="https://github.com/JairoMagno" id="senha">
              Esqueceu a senha?
              <span className="ps-2">
                  <HiOutlineMail />
              </span>
            </a>
          </Form>
        </div>
    );
}

export default Formulario;