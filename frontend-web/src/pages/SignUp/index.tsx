import React from  'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';


const SignUp: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="GoBarber" />
            <form>
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

            </form>

            <a href="login">
                <FiArrowLeft />
                Voltar para logon
            </a>
        </Content>
    </Container>
    );

export default SignUp;
