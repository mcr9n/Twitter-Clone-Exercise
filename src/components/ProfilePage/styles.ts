import styled, { css } from "styled-components";

import {LocationOn, Cake, } from '../../styles/Icons'
import Button from '../Button';

export const Container = styled.div`
    display: flex; //queremos que ele consuma todo o espaço possível
    flex-direction: column; //uma informação debaixo da outra
    max-height: 100%; 
    overflow-y: auto; //no caso de overflow a gnt manda scrollar
    scrollbar-width: none; //firefox
    ::-webkit-scrollbar{
        display: none;
    }


`;
export const Banner = styled.div`
    flex-shrink: 0; //não deixa o tamanho do banner diminuir como se fosse encolher
    
    width: 100%; //o banner irá consumir 100% do espaço da tela
    height: min(33vw, 199px); //o tamanho do banner é sempre 33 view-width(33% do tamanho da tela) ou 199px no mínimo

    background: var(--twitter);

    position: relative;



`;
export const Avatar = styled.div`
    width: max(45px, min(135px,22vw));
    height: max(45px, min(135px,22vw)); //cálculo pra deixar o avatar responsivo

    border: 3.75px solid var(--primary); //olhei no figma o tamanho da borda, sólida, cor preta

    background: var(--gray); //cor do avatar

    border-radius: 50%; //deixei a borda arredondada

    position: absolute; //só funciona se o elemento pai que é o banner tiver um position relative

    bottom: max(-60px, -10vw);

    left: 15px;









`;
export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0; //o primeiro padding pra cima, o segundo direita e esquerda e o último para baixo

    display: flex;

    flex-direction: column;

    position: relative;

    > h1{
        font-weight: bold; //h1 que é o nome de perfil da pessoa
        font-size: 19px;
    }
    > h2{
        font-weight: normal; //h2 é o @
        font-size: 15px;

        color: var(--gray);
    }
    > p{
        font-size: 15px; //biografia da pessoa
        margin-top: 11px;

     > a{
         text-decoration: none; //deixa o link na cor do twitter
         color: var(--twitter);
     }
    }
    > ul{
        list-style: none; //tira as bolinhas de listagem
        margin-top: 10px;
        margin-bottom: 10px; //já dá um espaçamento entre as informações pessoais, a biografia e a quantidade de seguidores
        > li{


            font-size: 15px;
            color: var(--gray);//estilização da lista que é a filha de ul
            > svg{
                fill: var(--gray); //os ícones vão ficar cinza também
                margin-right: 5px; //deixar um espaçamento legal em relação aos ícones


            }

        }



    }


`;

const iconCSS = css`
    width: 20px;
    height: 20px;

    color: var(--gray);

`;

export const LocationIcon = styled(LocationOn)`${iconCSS}`;
export const CakeIcon = styled(Cake)`${iconCSS}`;

export const Followage = styled.div`
    display: flex; //pra ele consumir o máximo de espaço possível na tela
    > span{
        font-size: 15px;
        color: var(--gray); //os dois spans dentro de followage vão ser texto de 15px cinza
        
        & + span{
            margin-left: 20px;
        }


    }

`;

export const EditButton = styled(Button)`
    position: absolute; //não funciona se o pai desse botão não for position relative
    top: 2vw;
    right: 7px;//vai ficar bem jogado na parte direita da tela

    padding: 4px, 16px;
    font-size: 13px;
    @media (min-width: 320px) {
        top: 10px; //no caso de uma tela grande o botão vai subir um pouco mais
        padding: 10px 19px; //um pouco mais de espaço interno
        font-size: 15px;

    }
    





`;