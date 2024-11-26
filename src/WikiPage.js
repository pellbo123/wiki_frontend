
import { useParams } from "react-router-dom";

function WikiPage() {
    const {param} = useParams();
    return(
        <div>
        <h1>위키정보들어갈곳</h1>
        <div>{param}</div>
        </div>
    )
}
export default WikiPage;