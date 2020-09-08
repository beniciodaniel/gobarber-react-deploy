import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Logo" />

      <form>
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
      </form>

      <a href="login">
        <FiLogIn size={16} />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
