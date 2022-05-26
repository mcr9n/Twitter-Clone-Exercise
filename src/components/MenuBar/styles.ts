import styled, { css } from 'styled-components';
import { Bell } from 'styled-icons/heroicons-solid';

import { Home, Notifications, Email, FavoriteBorder, Person, ExitToApp, Rocketseat} from '../../styles/Icons'

export const Container = styled.div`
    display: none;
    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between; //apartir de um certo ponto ela aparece na tela

        position: sticky; //pra ela ficar grudadona na tela
        top: 0;
        left: 0;
        padding: 9px 19px 20px; //9 pra cima, 19 pros lados e 20 pra baixo

        max-height: 100vh; // a altura máxima da barra só pode ser a da tela
        overflow-y: auto ; //no caso de overflow teremos um scroll



        
    }

`;

export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px){
        align-items: flex-start;

    }
`;
export const Logo = styled(Rocketseat)`
    width: 41px;
    height: 41px;
     >path{
         fill: var(--twitter);

     }
    margin-bottom: 20px;

`;
export const MenuButton = styled.div`
    display: flex; //eles precisam consumir o maior espaço possível
    align-items: center; //itens centralizados
    flex-shrink: 0; //eles não vão esticar ou encolher na tela

    > span{
        display: none;

    }
    @media (min-width: 1280px) {
        > span{
            display: inline;
            margin-left: 19px;
            font-weight: bold;
            font-size: 19px;

            
            
            
        }
    padding-right: 15px; //faz com que o botão de um espaçamento legal e deixa mais satisfatório


        
    }
    padding: 8.25px 0;
    outline: 0;
    & + button{
        margin-top: 16.5px;


    }
    & + button:last-child{
        margin-top: 33px;
        width: 40px;
        height: 40px;

        > span{
            display: none;

        }
        @media (min-width: 1280px){
            width: 100%;
            height: unset; //como se não tivesse mexido em nada
            > span{
                display: inline;

            }

        }

    }

    cursor: pointer;
    border-radius: 25px;

    &:hover{
        background: var(--twitter-dark-hover);


    }
    &:hover, &.active{
        span, svg{
            color: var(--twitter);
            fill: var(--twitter); //quando o botão está selecionado colorimos esses dois elementos de azul

        }

    }
`;


// o que for ícone deixamos para baixo

const iconCSS = css`
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    color: var(--white);
`;

export const HomeIcon = styled(Home)`${iconCSS}`;
export const BellIcon = styled(Notifications)`${iconCSS}`;
export const EmailIcon = styled(Email)`${iconCSS}`;
export const FavoriteIcon = styled(FavoriteBorder)`${iconCSS}`;
export const ProfileIcon = styled(Person)`${iconCSS}`;


export const Botside = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;

`;
export const Avatar = styled.div`
    width: 39px;
    height: 39px;

    flex-shrink: 0;

    border-radius: 50%;

    background: var(--gray);


`;
export const ProfileData = styled.div`
    display: none;
    @media (min-width: 1280px){
        display: flex;
        flex-direction: column;
        margin-left: 10px; // dar o espaçamento pra foto de 10 pixels pra direita
        font-size: 14px;
        > span{
            color: var(--gray);


        }

    }


`;

export const ExitIcon = styled(ExitToApp)`
    display: none;
    @media (min-width: 1280px){
        display: inline-block; //esse ícone vai aparecer
        width: 25px;
        height: 25px;
        color: var(--white);
        margin-left: 30px;
        cursor: pointer;

        &:hover{
            > path{
                color: var(--like);
            }
        }

    }


`;
