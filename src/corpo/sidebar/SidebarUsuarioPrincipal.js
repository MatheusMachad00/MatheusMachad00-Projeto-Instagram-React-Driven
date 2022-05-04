const objUsuario = {
    img: ["img/iggy_perfil.jpg", "iggy"],
    username: "GoodBoyIggy",
    displayName: "iggy",
};

export default function SidebarUsuarioPrincipal() {
    const {
        img: [src, alt],
        username,
        displayName,
    } = objUsuario;

    return (
        <div className="usuario">
            <img src={src} alt={alt} />
            <div className="texto">
                <strong>{username}</strong>
                {displayName}
            </div>
        </div>
    );
}