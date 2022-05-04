export default function StoryUsuario(props) {

    const {
        storyImg: [src, alt],
        userNameStory,
        storyKey
    } = props;

    return (
        <div className="story" key={storyKey}>
            <div className="imagem">
                <img src={src} alt={alt} />
            </div>
            <div className="usuario">
                {userNameStory}
            </div>
        </div>
    );
}