// Herramientas React
import { useEffect, useState } from "react";

// Lógica TS para filtrar elementos, modificar el DOM y agregar dinamismo
import filter from "./filter";

export default function Main():JSX.Element{
    const [data, setData] = useState([]) as any;
    useEffect(()=>{fetch("/data.json").then(response => response.json()).then(response => setData(response))}, []);

    return(
        <main className="main" onClick={(e:any)=>{ filter(e) }}>
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