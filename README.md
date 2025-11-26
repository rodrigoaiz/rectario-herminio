# Recetario Herminio

¡Bienvenido al Recetario Herminio! Una colección de recetas saludables, divertidas y fáciles de preparar, pensadas especialmente para loncheras escolares.

## 🚀 Características

*   **Diseño Moderno**: Interfaz limpia y atractiva con colores vibrantes (Amarillo y Negro).
*   **Filtrado por Etiquetas**: Explora recetas por categorías como "Saludable", "Rápido", "Divertido", etc.
*   **Contenido Dinámico**: Recetas gestionadas fácilmente a través de archivos MDX.
*   **Optimizado**: Construido con Astro para un rendimiento excepcional y SEO amigable.
*   **Interactivo**: Animaciones suaves y navegación intuitiva.

## 🛠️ Tecnologías

*   **[Astro](https://astro.build/)**: Framework web para sitios rápidos centrados en contenido.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidad para estilos rápidos y responsivos.
*   **[React](https://reactjs.org/)**: Biblioteca para interfaces de usuario (integrada para componentes interactivos).
*   **MDX**: Markdown con esteroides para escribir contenido enriquecido.

## 📂 Estructura del Proyecto

```text
src/
├── components/   # Componentes UI reutilizables (Header, Footer, RecipeCard, TagFilter)
├── content/      # Colecciones de contenido (Recetas en .mdx)
├── layouts/      # Plantillas de página principales
├── pages/        # Rutas y páginas del sitio
│   ├── index.astro         # Página de inicio
│   └── recetas/
│       ├── index.astro     # Catálogo completo
│       ├── [slug].astro    # Detalle de receta
│       └── tags/[tag].astro # Filtrado por etiqueta
└── styles/       # Estilos globales
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`   |
| `npm run preview`         | Vista previa de la construcción localmente       |

## 📝 Agregar una Nueva Receta

1.  Crea un nuevo archivo `.mdx` en `src/content/recipes/`.
2.  Usa el siguiente formato:

```mdx
---
title: "Nombre de la Receta"
description: "Breve descripción apetitosa."
image: "URL de la imagen (puede ser externa o local)"
ingredients:
  - "Ingrediente 1"
  - "Ingrediente 2"
tags: ["Etiqueta1", "Etiqueta2"]
prepTime: "15 min"
---

## Instrucciones

1. **Paso 1**: Descripción del paso.
2. **Paso 2**: Descripción del paso.
```

¡Disfruta cocinando! 🍳
