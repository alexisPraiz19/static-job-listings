Opción 1:
Filtre las ofertas de empleo en función de las categorías utilizando el atributo HTML 'data-'. En esta opción, usaría el contenido codificado que ya existe en el archivo [index.html](./index.html).

Las categorías son:

- Rol: Frontend, Backend, Fullstack
- Nivel: Junior, Peso Medio, Senior
- Lenguajes: Python, Ruby, JavaScript, HTML, CSS
- Herramientas: React, Sass, Vue, Django, RoR (Ruby on Rails)

Por lo tanto, si una oferta de empleo tiene las siguientes categorías 'Frontend, Junior, JavaScript, React', sus atributos de datos HTML se verían así: 'data-role="frontend" data-level="junior" data-languages="javascript" data-tools="react"'.

Opción 2:
Utilice el archivo [data.json](./data.json) para extraer los datos y, a continuación, agregar el contenido de forma dinámica. Esto sería perfecto si estás buscando practicar una biblioteca/framework JS como React, Vue o Svelte.

Para agregar un filtro, el usuario debe hacer clic en las tabletas en el lado derecho de la lista en el escritorio o en la parte inferior en el móvil. Por cada filtro agregado, solo se deben devolver los listados que contengan todos los filtros seleccionados.