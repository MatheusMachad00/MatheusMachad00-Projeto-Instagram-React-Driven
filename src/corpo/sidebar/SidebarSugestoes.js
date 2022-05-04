import SidebarSugestoesProps from "./SidebarSugestoesProps";

const objSugestoes = [
    {
        imgSugestao: ["img/buccellati_perfil.jpg", "buccellati"],
        sugestaoNome: "BBuccellati",
        sugestaoTexto: "Segue você"
    },
    {
        imgSugestao: ["img/mista_perfil.png", "mista"],
        sugestaoNome: "GuidoMista6",
        sugestaoTexto: "Segue você"
    },
    {
        imgSugestao: ["img/rohan_perfil.png", "rohan"],
        sugestaoNome: "RohanKishibe",
        sugestaoTexto: "Novo no Instagram"
    },
    {
        imgSugestao: ["img/reimi_perfil.jfif", "reimi"],
        sugestaoNome: "ReimiSugimoto",
        sugestaoTexto: "Segue você"
    },
    {
        imgSugestao: ["img/polnareff_perfil.jpg", "polnareff"],
        sugestaoNome: "JPPolnareff",
        sugestaoTexto: "Segue você"
    }
];

export default function SidebarSugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {objSugestoes.map((sugestao, index) => (
                <SidebarSugestoesProps
                    key={index}
                    imgSugestao={sugestao.imgSugestao}
                    sugestaoNome={sugestao.sugestaoNome}
                    sugestaoTexto={sugestao.sugestaoTexto} />
            ))}</div>
    );
}