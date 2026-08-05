# Maestro en Construcción — Landing Page

Landing page de una página para un maestro constructor con 20 años de experiencia. Sitio estático (HTML, CSS y JavaScript puro), sin frameworks ni dependencias de build.

## Vista previa

Abre `index.html` directamente en el navegador o publícalo con GitHub Pages (ver más abajo).

## Estructura del proyecto

```
constructora-landing/
├── index.html          # Estructura y contenido de la página
├── css/
│   └── style.css       # Estilos (colores, tipografía, layout, responsive)
├── js/
│   └── script.js       # Menú móvil, año del footer, carga de fotos, formulario de contacto
└── images/
    ├── hero/           # Foto de portada (sección principal)
    ├── nosotros/       # Foto de la sección "Nosotros"
    └── proyectos/      # Fotos de trabajos/proyectos realizados (galería)
```

## Servicios incluidos

Losas y cerámica, antejardín y cierres perimetrales, porcelanato, gasfitería, pintura, electricidad, estructuras metálicas, portones y rejas, techumbre, estuco, radier y yeso.

## Cómo agregar fotos reales

Cada recuadro de foto en el sitio busca una imagen en una ruta fija. Basta con guardar el archivo con ese mismo nombre en la carpeta indicada y se muestra automáticamente (no hay que tocar código):

| Sección    | Ruta esperada                    |
|------------|-----------------------------------|
| Hero       | `images/hero/hero-1.jpg`          |
| Nosotros   | `images/nosotros/nosotros-1.jpg`  |
| Proyectos  | `images/proyectos/proyecto-1.jpg` a `proyecto-6.jpg` |

Si prefieres otros nombres de archivo, avisa para actualizar las rutas en `index.html`.

## Datos de contacto (editar en `index.html` si cambian)

- Teléfono: +56 9 2824 6628
- Correo: jcb24775@gmail.com
- WhatsApp: enlace directo a `wa.me/56928246628`

## Cómo ejecutarlo localmente

No requiere instalación. Basta con abrir `index.html` en cualquier navegador. Para servirlo con un servidor local (opcional, evita restricciones de algunos navegadores con rutas locales):

```bash
# Con Python
python -m http.server 8080

# Con Node (npx)
npx serve .
```

Luego visita `http://localhost:8080`.

## Publicar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. El sitio quedará disponible en `https://<usuario>.github.io/<repositorio>/`.

## Tecnologías

- HTML5 semántico
- CSS3 (variables, grid, flexbox, responsive)
- JavaScript vanilla (sin dependencias)
- Google Fonts (Anton + Inter)

## Estado

Proyecto en desarrollo — pendiente reemplazar imágenes de marcador de posición por fotos reales de trabajos.
