import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column; //o elemento pai está no formato de coluna

`;

export const Tab = styled.div`
    margin-top: 10px;
    padding: 11px 0 15px;
    text-align: center;

    font-weight: bold;
    font-size: 15px;

    outline: 0;
    cursor: pointer;
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);

    &:hover{
        background: var(--twitter-dark-hover);


    }



`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0; //as coisas vão ficar encolhidas no celular sem essa regra
    
`;