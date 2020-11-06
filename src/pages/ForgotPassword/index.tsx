import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background, AnimationContainer } from './styles';
import { useToast } from '../../context/ToastContext';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null); // para poder setar os erros nos campos do Form (Unform)

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (formData: ForgotPasswordFormData) => {
      try {
        formRef.current?.setErrors({}); // para sempre fazer a validação do zero

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(formData, {
          abortEarly: false, // por padrão o Yup para no primeiro erro
        });

        // recuperação de senha
        // falta implementar aqui
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
          return;
        }
        // disparar um toast
        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Ocorreu um erro ao tentar realizar recuperação de senha, tente novamente',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>
            <Input icon={FiMail} name="email" placeholder="E-mail" />

            <Button type="submit">Recuperar</Button>
          </Form>

          <Link to="/">
            <FiLogIn size={16} />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
