import PostUsuario from "./PostUsuario.jsx";

const objPosts = [
    {
        userImg: ["img/jolyne__perfil.png", "jolyne"],
        userName: "JolyneCujoh",
        postImg: ["img/jojo-6-poster.jpg", "jolyne and friends"],
        likeImg: ["img/jotaro_perfil.jpg", "jotaro"],
        userLike: "JotaroKujo"
    },
    {
        userImg: ["img/koichi_perfil.png", "koich"],
        userName: "KoichiHirose",
        postImg: ["img/koichi-and-yukako.jpeg", "koichi-and-yukako"],
        likeImg: ["img/yukako_perfil.jpg", "yukako"],
        userLike: "YukakoYamagishi"
    },
    {
        userImg: ["img/jotaro_perfil.jpg", "jotaro"],
        userName: "JotaroKujo",
        postImg: ["img/jotaro and friends.jpg", "jotaro and friends"],
        likeImg: ["img/joseph_perfil.jfif", "joseph"],
        userLike: "JosephJoelstar"
    }
];

export default function Posts() {
    return (
        <>
            {objPosts.map((post, index) => (
                <PostUsuario
                    key={index}
                    userImg={post.userImg}
                    userName={post.userName}
                    postImg={post.postImg}
                    likeImg={post.likeImg}
                    userLike={post.userLike} />
            ))} </>
    );
}