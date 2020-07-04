import React from  'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web'

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';


const SignUp: React.FC = () => {
    function handleSubmit(data:object): void{
        console.log(data);
    }

    return (
        <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="GoBarber" />
            <Form onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>

                <Input icon={FiUser} name="name" placeholder="Nome"/>
                <Input icon={FiMail} name="email" placeholder="E-mail"/>
                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Password"
                />

                <Button type="submit">Cadastrar</Button>

            </Form>

            <a href="login">
                <FiArrowLeft />
                Voltar para logon
            </a>
        </Content>
    </Container>
    )
};

export default SignUp;
