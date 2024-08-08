// Lógica para eliminar filtros del contenedor "skills"
import { delete_filters } from "../Main/filter";
import { delete_filter } from "../Main/filter";

export default function Hero():JSX.Element{
    return(
        <div className="hero">
            <div className="skills-filter show-filter r-shadow">
                <div className="skills" id="skills" onClick={delete_filter}></div>

                <span className="clear r-pointer" onClick={delete_filters}>Clear</span>
            </div>
        </div>
    );
};