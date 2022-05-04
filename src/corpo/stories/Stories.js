import StoryUsuario from "./StoryUsuario"

const objStories = [
    {
        storyImg: ["img/jolyne__perfil.png", "jolyne"],
        userNameStory: "JolyneCujoh"
    },
    {
        storyImg: ["img/jotaro_perfil.jpg", "jotaro"],
        userNameStory: "JotaroKujo"
    },
    {
        storyImg: ["img/dio_perfil.jpg", "dio"],
        userNameStory: "DioBrando"
    },
    {
        storyImg: ["img/joseph_perfil.jfif", "joseph"],
        userNameStory: "JosephJoelstar"
    },
    {
        storyImg: ["img/giorno_perfil.jpg", "giorno"],
        userNameStory: "GiornoGiovanna"
    },
    {
        storyImg: ["img/josuke_perfil.jpg", "josuke"],
        userNameStory: "JosukeHigashikata"
    },
    {
        storyImg: ["img/koichi_perfil.png", "koichi"],
        userNameStory: "KoichiHirose"
    },
    {
        storyImg: ["img/diavolo-perfil.jpg", "diavolo"],
        userNameStory: "DiavoloTheBoss"
    },
];

export default function Stories() {
    return (
        <div className="stories">
            {objStories.map((story, index) => (
                <StoryUsuario
                    key={index}
                    storyImg={story.storyImg}
                    userNameStory={story.userNameStory} />
            ))}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}