import { useState } from "react";
import { Post } from "./style";

const objPosts = [
    {
        userImg: "img/jolyne__perfil.png",
        userName: "JolyneCujoh",
        postImg: "img/jojo-6-poster.jpg",
        postImgAlt: "jolyne and friends",
        likeImg: "img/jotaro_perfil.jpg",
        likeImgAlt: "jotaro",
        userLike: "JotaroKujo"
    },
    {
        userImg: "img/koichi_perfil.png",
        userName: "KoichiHirose",
        postImg: "img/koichi-and-yukako.jpeg",
        postImgAlt: "koichi-and-yukako",
        likeImg: "img/yukako_perfil.jpg",
        likeImgAlt: "yukako",
        userLike: "YukakoYamagishi"
    },
    {
        userImg: "img/jotaro_perfil.jpg",
        userName: "JotaroKujo",
        postImg: "img/jotaro and friends.jpg",
        postImgAlt: "jotaro and friends",
        likeImg: "img/joseph_perfil.jfif",
        likeImgAlt: "joseph",
        userLike: "JosephJoelstar"
    }
];

export default function PostUsuario(props) {
    const [likes, setLikes] = useState([]);

    function postLiked(like) {
        if (likes.includes(like)) {
            setLikes([...likes.filter((l) => l !== like)]);
            return;
        }

        setLikes([...likes, like]);
    }

    return (
        <>
            {objPosts.map((el, index) => (
                <Post key={index} selecionado={likes.includes(index)}>
                    <div className="topo">
                        <div className="usuario">
                            <img className="usuario-img" src={el.userImg} alt={el.userName} />
                            {el.userName}
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div className="conteudo">
                        <img onClick={() => postLiked(index)} src={el.postImg} alt={el.postImgAlt} />
                    </div>

                    <div className="fundo">
                        <div className="acoes">
                            <div className="botoes">
                                <div className="liked">
                                {likes.includes(index) ?
                                    <ion-icon onClick={() => postLiked(index)} name="heart"></ion-icon>
                                    : <ion-icon onClick={() => postLiked(index)} name="heart-outline"></ion-icon>}
                                </div>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="curtidas">
                            <img className="usuario-img" src={el.likeImg} alt={el.likeImgAlt} />
                            <div className="texto">
                                Curtido por <strong>{el.userLike}</strong> e <strong>outras 101.523 pessoas</strong>
                            </div>
                        </div>
                    </div>
                </Post>
            ))};
        </>
    );
}