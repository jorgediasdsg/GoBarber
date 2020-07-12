import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container } from './styles';

import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
    message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
    const { removeToast } = useToast();

    return (
        <Container type={message.type} hasDescription={!!message.description}>
            <FiAlertCircle size={20} />
            <div>
                <strong>{message.title}</strong>
                {message.description && (
                    <p>Não foi possível fazer login na aplicação</p>
                )}
            </div>
            <button onClick={() => removeToast(message.id)} type="button">
                <FiXCircle size={18} />
            </button>
        </Container>
    );
};
export default Toast;