// Funciones de código reusable
import { highlight, array_filters_length } from "./reusable_function";

export let array_filters = [] as any[];

// Lógica TS para filtrar elementos, modificar el DOM y agregar dinamismo
export default function filter(e:any):void{
    let target = e.target as any;
        
    if(target.tagName == "SPAN"){
        // Fragmento para agregar/eliminar elementos del array de filtros. Además de evitar repetición que los filtros se dupliquen y rompan todo
        if(array_filters.includes(target.textContent)){
            const delete_index = array_filters.indexOf(target.textContent);
            array_filters.splice(delete_index, 1);

        }else array_filters.push(target.textContent); 

        // Fragmento para agregar visualmente al DOM, filtros seleccionados en el contenedor de las "skills" ubicado en "header"
        const container_skills_filter = document.getElementById("skills") as HTMLDivElement;
        const children = Array.from(container_skills_filter.children);

        if(array_filters.includes(target.textContent)){
            container_skills_filter.innerHTML += `
              <div class="skill" data-id="${target.textContent}">
                ${target.textContent} 
                <span class="r-pointer"></span>
              </div>
            `;
        }else children.forEach((child:any)=>{ if(child.dataset.id == target.textContent) container_skills_filter.removeChild(child) });
        
        // Funciones reusables (highlight)=>{ Destaca visualmente "job/language/tool/role/level" según filtros seleccionados  }
        // (array_filters_length)=>{ Evalua si el "array de filtros" está vacío para tomar acciones correspondientes }
        highlight(array_filters);
        array_filters_length(array_filters);
    };
};

// Lógica para eliminar filtro seleccionado del contenedor "skills" y del "array de filtros"
export function delete_filter(e:any):void{
    let target = e.target as any;

    if(target.tagName == "SPAN" && array_filters.includes(target.parentElement.dataset.id)){
       const filter       = target.parentElement as HTMLDivElement;
       const filter_id    = filter.dataset.id as string;
       const delete_index = array_filters.indexOf(filter_id) as number;
       const container_skills_filter = document.getElementById("skills") as HTMLDivElement;

       array_filters.splice(delete_index, 1);
       container_skills_filter.removeChild(filter);
       
       highlight(array_filters);
       array_filters_length(array_filters);
    }
}

// Lógica para eliminar todos los filtros del contenedor "skills"
export function delete_filters(e:any):void{
    // Fragmento para modificar la apariencia del DOM
    const requirements  = Array.from(document.querySelectorAll(".job")) as [HTMLDivElement];
    const container_skills_filter = e.target.previousElementSibling as HTMLDivElement;

    Array.from(container_skills_filter.children).forEach((child:any)=>{ container_skills_filter.removeChild(child) });
    container_skills_filter.parentElement!.style.opacity = "0";

    requirements.forEach((requirement:any)=>{ 
        requirement.style.display = "flex"; 
        requirement.classList.remove("active_filter");
    });

    // Eliminar todos los filtros del "array de filtros"
    array_filters = [];
}