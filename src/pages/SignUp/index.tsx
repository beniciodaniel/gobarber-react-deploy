import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

const SignUp: React.FC = () => {
  function handleSubmit(formData: object): void {
    console.log(formData);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Logo" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft size={16} />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
