export default function PostUsuario(props) {
    const {
        userImg: [srcUser, altUser],
        userName,
        postImg: [srcPost, altPost],
        likeImg: [srcLike, altLike],
        userLike,
        postKey
    } = props;

    return (
        <div className="post" key={postKey}>
            <div className="topo">
                <div className="usuario">
                    <img className="usuario-img" src={srcUser} alt={altUser} />
                    {userName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={srcPost} alt={altPost} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img className="usuario-img" src={srcLike} alt={altLike} />
                    <div className="texto">
                        Curtido por <strong>{userLike}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}