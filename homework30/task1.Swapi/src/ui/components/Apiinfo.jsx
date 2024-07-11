import Parameter from "./Parameter.jsx";
import {useSelector} from "react-redux";
import selectors from "../../core/selectors.js";

function Apiinfo() {
    const parameters = useSelector(selectors.parameters);
    const info = useSelector(selectors.info);

    return (
        <div className="apiinfo">
            <div key="0" className="p-2">
            {parameters.map((parameter)=>(
                <Parameter value={parameter}/>
            ))}
            </div>
            <pre>
                {info}
            </pre>
        </div>
    )
}
export default Apiinfo