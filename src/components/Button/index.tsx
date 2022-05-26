import styled from 'styled-components';

interface Props{
    outlined?: boolean;

}

export default styled.button<Props>`
    background: ${props => props.outlined ? 'transparent' : 'var(--twitter)'}; //cor do fundo: se a pessoa falou que é outlined, a cor do fundo será transparente
    color: ${props => props.outlined ? 'var(--twitter)' : 'var(--white)'}; //se ele for outlined, a cor do texto será azul, caso contrário branco
    border: ${props => props.outlined ? '1px solid var(--twitter)' : 'none'};//se ele for outlined, terá uma borda cor do twitter

    padding: 16px;
    border-radius: 25px;

    font-weight: bold;
    font-size: 15px;

    cursor: pointer;
    outline: 0;

    &:hover{
        background: ${props => props.outlined ? 'var(--twitter-dark-hover)':'var(--twitter-light-hover)'}; //se for o botão outlined o hover será mais escuro caso contrário será masi claro
        


    }
`;