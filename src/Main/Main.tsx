import { useEffect, useState } from "react";


export default function Main():JSX.Element{
    const [data, setData] = useState([]) as any;
    
    useEffect(()=>{
        fetch("/data.json").then(response => response.json()).then(response => setData(response));
    },[]);

    const array_filters = [] as any[];
    const requirements  = Array.from(document.querySelectorAll(".requirements")) as [HTMLDivElement];

    function filter(e:any):void{
        let target = e.target as any;
        
        if(target.tagName == "SPAN"){
            /* Fragmento para evitarRepetición/agregar/eliminar elementos del array de filtros */
            if(array_filters.includes(target.textContent)){
                const delete_index = array_filters.indexOf(target.textContent);
                array_filters.splice(delete_index, 1);

            }else array_filters.push(target.textContent); 

            /* Fragmento para Destacar filtros seleccionados */
            requirements.map((requirement:any)=>{
                Array.from(requirement.children).some((child:any)=>{ 
                    if(array_filters.includes(child.textContent)){
                        child.parentElement.setAttribute("data-active_filter", true);
                        return true;
                    }else{
                        child.parentElement.setAttribute("data-active_filter", false);
                        return false;
                    }
                })

                if(requirement.dataset.active_filter == "true") requirement.parentElement.classList.add("active_filter"); 
                else requirement.parentElement.classList.remove("active_filter");
            });

            /* Este fragmento recorre el array de filtros para luego recorrer "data" buscando si alguno de sus "objetos" coincide con alguno de los filtros... Si es verdadero, lo recorta del array para luego volver a añadirlo pero al inicio del array, con el obejetivo de; cuando sea releido el valor de "data", se pinte en pantalla de manera ordenada */
           /* const data_clon = [... data] as any;

            array_filters.map((filters_i:any)=>{
                data.map((i:any)=>{
                    if(i.languages.includes(filters_i) || i.tools.includes(filters_i) || i.role.includes(filters_i) || i.level.includes(filters_i)){
                        /*const delete_index = data.indexOf(i) as number;
                        data.splice(delete_index, 1);
                       
                        data_clon.unshift(i);
                        let pepe = Array.from(new Set(data_clon))
                        setData(pepe)
                    };
                });
            });*/
           /* 
            setData(data_clon);*/
        }
    }

    return(
        <main className="main" onClick={ filter }>
            {
                data?.map((data:any) => (
                    <div key={data.id} className={`job ${data.featured ? "featured" : ""} r-shadow`}>
                        <div className="details">
                            <img src={`${data.logo}`} alt="enterprise-logo" className="logo"/>

                            <article className="detail">
                                <div className="top">
                                    <span className="company">{data.company}</span>
                                    { data.new ? <span className="new">NEW!</span> : "" }
                                    { data.featured ? <span className="featured-table">FEATURED</span> : "" }
                                </div>

                                <h4>{data.position}</h4>

                                <div className="bottom">
                                    {data.postedAt} <span aria-hidden>.</span>
                                    {data.contract} <span aria-hidden>.</span>
                                    {data.location}
                                </div>
                            </article>
                        </div>

                        <div className="requirements" >
                            <span>{data.role}</span>
                            <span>{data.level}</span>
                            { data.languages.map((language:any)=> ( <span key={`required-languege-company-${language}`}>{language}</span> )) }
                            { data.tools.map((tool:any)=> ( <span key={`required-tools-company-${tool}`}>{tool}</span> )) }
                        </div>
                    </div>
                ))
            }
        </main>
    );
};