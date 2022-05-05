import styled from 'styled-components'

export const Post = styled.div`
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    display: flex;
    flex-direction: column;
    margin-top: 18px;

.topo {
        display: flex;
        justify-content: space-between;
        padding: 13px 16px;
        font-size: 14px;
        font-weight: 500;
}

.topo .usuario, .post .topo .acoes {
    display: flex;
    align-items: center;
}

.topo img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
}

.usuario-img{
    height: 32px;
    width: 32px;
    border-radius: 50%;
}

.usuario, .post .topo img, .post .fundo img, .post ion-icon, .post strong {
    cursor: pointer;
}

.conteudo img {
    width: 100%;
}

.fundo .acoes {
    display: flex;
    justify-content: space-between;
    padding: 13px 16px;
    font-size: 24px;
}

.fundo .acoes div:first-child ion-icon {
    margin-right: 6px;
}

.fundo .acoes .red div:first-child ion-icon {
    margin-right: 6px;
}

.fundo .curtidas {
    display: flex;
    align-items: center;
    padding: 0 16px 13px;
    font-weight: 300;
}

.fundo .curtidas img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

:last-child {
    margin-bottom: 18px;
}

.botoes {
    display: flex;
}

.liked{
    color: ${(props) => (props.selecionado ? "red" : "")};
}
`