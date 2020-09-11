import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';
import AuthContext from '../../context/AuthContext';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null); // para poder setar os erros nos campos do Form (Unform)

  const { name } = useContext(AuthContext);

  console.log(name);

  const handleSubmit = useCallback(async (formData: object) => {
    try {
      formRef.current?.setErrors({}); // para sempre fazer a validação do zero

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(formData, {
        abortEarly: false, // por padrão o Yup para no primeiro erro
      });
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn size={16} />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
