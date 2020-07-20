import React, {useCallback, useRef} from 'react';
import {Image, KeyboardAvoidingView, Platform, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native';
// import {} from '@unform/core';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png';

import {Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButtonText, CreateAccountButton} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const handleSignIn = useCallback((data:object) => {console.log(data)}, [])

  return (
    <>
      <KeyboardAvoidingView
        style={{flex:1}}
        behavior={Platform.OS ==='ios'? 'padding' :  undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex:1}}
        >
          <Container>
              <Image source={logoImg} />
              <View>
                <Title>Faça seu logon</Title>
              </View>
              <Form ref={formRef} onSubmit={handleSignIn}>
                <Input name="email" icon="mail" placeholder="E-mail" />

                <Input name="password" icon="lock" placeholder="Senha" />

                <Button onPress={() => {
                  formRef.current.submitForm();
                }}
                >
                  Entrar
                </Button>
              </Form>
              <ForgotPassword onPress={() => {}}>
                <ForgotPasswordText>
                  Esqueci minha senha
                </ForgotPasswordText>
              </ForgotPassword>
          </Container>
        </ScrollView>
        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccountButtonText>
            Criar uma conta
          </CreateAccountButtonText>
        </CreateAccountButton>
      </KeyboardAvoidingView>
    </>
  )
}


export default SignIn;
