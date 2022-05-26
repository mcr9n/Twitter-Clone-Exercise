import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
    display: flex; //vai ficar uma linha e vamos utilizar no formato de row por padrão
    align-items: center;
    justify-content: space-between;//separar a parte da esquerda com a parte da direita que é o botão

    > div{
        display: flex;
        align-items: center;

    }



`;
export const Avatar = styled.div`
    width: 49px;
    height: 49px;
    background: var(--gray);
    border-radius: 50%;
    margin-right: 10px;

`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;

    > strong{
        font-size: 14px;
        
    }
    > span{
        font-size: 14px;
        color: var(--gray);
    }

`;
export const FollowButton = styled(Button)`
    padding: 6px 17px ;

`;
