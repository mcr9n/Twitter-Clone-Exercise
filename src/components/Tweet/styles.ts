import styled, { css } from 'styled-components';

import { Chat, Favorite, Rocketseat,  } from '../../styles/Icons';

export const Container = styled.div`
   display: flex;
   flex-direction: column; //No meu tweet posso ver que as coisas acontecem de cima para baixo
   padding: 14px 16px;//14 pra cima e pra baixo e 16 px pros lados, que é justamente o espaçamento
   border-bottom: 1px solid var(--outline); //todo tweet termina com aquela linha em baixo dele
   max-width: 100%; //pq toda borda vai ser 100% do tamanho da tela



`;

export const Retweeted = styled.div`
    display: flex; //retweet é uma linha
    align-items: center; //alinharei os items de forma vertical, vão ficar alinhadinhos
    font-size : 13px;
    color: var(--gray);


`;
export const RocketseatIcon = styled(Rocketseat)`
    width: 16px;
    height: 16px;
    margin-left: 35px;
    margin-right: 9px;
    > path {
        fill: var(--gray);

    }
`;
export const Body = styled.div`
    display: flex;
    margin-top: 3px;
    position: relative;

`;
export const Avatar = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%; //pra ficar arredondado
    flex-shrink: 0; //pra não ficar esticado e nem espremido
    background: var(--gray);
    position: absolute;
    top: 0;
    left: 0px;
    


`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 59px;



`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    white-space: nowrap; //faz com que o texto fique sem quebrar linha

    > strong{
        margin-right: 5px;


    }
    > span, time{
        color: var(--gray);


    }
    > strong, span{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden; //quando a tela fica pequena demais esses elementos ficam com 3 pontinhos


    }


`;
export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    margin: 0 10px;

`;
export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px; //distanciar um pouco a descrição da parte de cima



`;
export const ImageContent = styled.div`
    margin-top: 12px; //distanciar um pouco a imagem de cima
    width: 100%;
    height: min(285px, max(175px, 41vw)); //fórmula altura da imagem responsiva
    background: var(--outline);
    border-radius: 14px;
    cursor: pointer;
    &:hover{
        opacity: 0.7;



    }



`;
export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; //os ícones vão ficar separados entre sí

    flex-wrap: wrap; //os ícones vão se quebrando e encaixando da forma que podem no caso de uma tela apertada
    margin: 11px auto 0; //11 pixels pra cima e pra baixo, auto pra esquerda e direita, e pra baixo trocarei do 11 pro 0

    width:  100%; //no mobile

    @media(min-width: 330px){
        width: 63%; //tablet e computador
        > div{
            cursor: pointer;

            &:hover{
                opacity: 0.7;

            }
        }


        
    }




`;
export const Status = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    


    > svg{
        margin-right: 5px;

    }
    &:nth-child(1){
        &, > svg path {
            color: var(--gray);

        } 

    }
    &:nth-child(2){
        color: var(--retweet);
        > svg path{
            fill: var(--retweet);
        }
    }
    &:nth-child(3){
        color: var(--like);
        > svg{
            fill: var(--like);
            
        }
    }
`;

const iconCSS = css`
    width: 19px;
    height: 19px;


`;
export const CommentIcon = styled(Chat)`${iconCSS}`;
export const RetweetIcon = styled(Rocketseat)`${iconCSS}`;
export const LikeIcon = styled(Favorite)`${iconCSS}`;