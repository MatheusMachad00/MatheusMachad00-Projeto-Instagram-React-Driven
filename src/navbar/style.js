import styled from 'styled-components'

export const NavbarBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 54px;
    border-bottom: 1px solid #DBDBDB;
    font-size: 22px;
    background-color: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    ion-icon, .navbar img {
        cursor: pointer;
    }

    .container {
    width: 100%;
    max-width: 935px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.container > * {
    display: flex;
    align-items: center;
    height: 100%;
}

.logo img {
    position: relative;
    top: 3px;
}

.logo .separador {
    width: 1px;
    height: 22px;
    background-color: #DBDBDB;
    margin: 0 10px;
}

.pesquisa input {
    width: 215px;
    height: 28px;
    border-radius: 3px;
    background-color: #FAFAFA;
    border: 1px solid #DBDBDB;
    color: #979797;
    text-align: center;
}

.icones ion-icon {
    margin: 0 5px;
}

.logo-mobile, .instagram-mobile, .icones-mobile{
    display: none;
}

@media (max-width: 935px) {
.container {
    padding: 0 20px;
}
}

@media (max-width: 614px) {
.pesquisa {
    display: none;
}

.icones {
    display: none;
}

.icones-mobile {
    display: flex;
}

.logo {
    display: none;
}

.logo-mobile, .instagram-mobile {
    display: flex !important;
}

.instagram-mobile {
    position: relative;
    top: 4px;
}
}
`