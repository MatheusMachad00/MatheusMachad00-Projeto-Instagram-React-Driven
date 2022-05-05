import Stories from "./stories/Stories"
import Posts from "./posts/Posts";
import Sidebar from "./sidebar/Sidebar";

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    );
}