// Fragmento para Destacar visualmente "job/language/tool/role/level" según filtros seleccionados 
export function highlight(array_filters:any[]){
    const requirements  = Array.from(document.querySelectorAll(".requirements")) as [HTMLDivElement];

    requirements.forEach((requirement:any)=>{
        let container_job = requirement.parentElement as HTMLDivElement;
        let children      = Array.from(requirement.children);

        children.some((child:any)=>{
            if(array_filters.includes(child.textContent)){
                container_job.classList.add("active_filter");
                container_job.style.display =  "flex";
                return true;
            }else{
                container_job.classList.remove("active_filter");
                container_job.style.display =  "none";
                return false;
            }
        });

        children.forEach((child:any)=>{
            if(array_filters.includes(child.textContent)) child.classList.add("name_filter");
            else child.classList.remove("name_filter");
        });
    });
};

// Fragmento para evaluar si el "array de filtros" está vacío y ejecutar acciones correspondientes según la respuesta
export function array_filters_length(array_filters:any[]):void{
    const container_skills_filter = document.getElementById("skills") as HTMLDivElement;
    const requirements  = Array.from(document.querySelectorAll(".requirements")) as [HTMLDivElement];

    if(array_filters.length == 0){
        requirements.forEach((requirement:any)=>{ requirement.parentElement.style.display = "flex" });
        container_skills_filter.parentElement!.style.opacity = "0";
        
    }else container_skills_filter.parentElement!.style.opacity = "1";
}