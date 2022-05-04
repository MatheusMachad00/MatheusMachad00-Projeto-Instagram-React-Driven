export default function SidebarSugestoesProps(props) {
    const {
        imgSugestao: [src, alt],
        sugestaoNome,
        sugestaoTexto,
        sugestaoKey
    } = props;

    return (
        <div className="sugestao" key={sugestaoKey}>
            <div className="usuario">
                <img className="usuario-img" src={src} alt={alt} />
                <div className="texto">
                    <div className="nome">{sugestaoNome}</div>
                    <div className="razao">{sugestaoTexto}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    );
}