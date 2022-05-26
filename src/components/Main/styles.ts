import styled, {css} from "styled-components";
import { ArrowLeft, Home, Search, Notifications, Email} from '../../styles/Icons'

export const Container  = styled.div`
    display: flex; //1 2 3
    flex-direction: column; //estou estilizando o container inteiro
    width: min(601px, 100%); //faz o mínimo entre 601px e 100% do tamanho da tela
    @media (min-width: 500px) {
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
    }



`;

export const Header  = styled.div`
    z-index: 2; //o elemento (header) precisa ficar acima de tudo
    position: sticky;
    top: 0;
    background: var(--primary);
    display: flex;
    align-items: center;
    text-align: left;
    padding: 8px 0 9px 13px;
    border-bottom: 1px solid var(--outline);

    > button{
        padding: 8px;
        border-radius: 50%; //deixar arredondado
        outline: 0;
        cursor: pointer; //quando a pessoa passar o mouse em cima vai ficar flechinha

        &:hover{
            background: var(--twitter-dark-hover); //quando a pessoa passar o mouse em cima


        }


    }





`;

export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;

    fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
    margin-left: 17px;

    display: flex;
    flex-direction: column; //pra ficar coluna

    > strong{
        font-size: 19px;

    }
    > span{
        font-size: 15px;
        color: var(--gray)

    }
    `;

export const BottomMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;

    background: var(--primary);
    width: 100%; //precisamos que a barra consuma 100% do espaço da tela
    border-top: 1px solid var(--outline);
    display: flex;
    justify-content: space-between; //os itens ficarão separados desta forma
    padding: 8px min(46px, max(10vw, 10px)); //uma cálculo que faz com que a barrinha mude de acordo com o tamanho da tela
    
    @media (min-width: 500px) {
        display: none; //apartir de 500px essa barra não irá mais aparecer na tela
    }





`;

const iconCSS = css`
    width: 31px;
    height: 31px;
    cursor: pointer;
    fill: var(--gray);

    &:hover,
    &.active{
        fill: var(--twitter);

    }

`;

export const HomeIcon = styled(Home)`${iconCSS}`;
export const SearchIcon = styled(Search)`${iconCSS}`; 
export const BellIcon = styled(Notifications)`${iconCSS}`;
export const EmailIcon = styled(Email)`${iconCSS}`;
