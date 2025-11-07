# Rosita - Panel de Administración

Panel de administración para Rosita Carnicería Premium con conexión a Firebase.

## Estructura del Proyecto

- `index.html` - Página principal con navegación
- `agregar-producto.html` - Formulario para agregar productos
- `ver-pedidos.html` - Visualización de pedidos
- `ver-clientes.html` - Visualización de clientes
- `cargar-receta.html` - Formulario para cargar recetas
- `styles.css` - Estilos compartidos con la paleta de colores de la marca
- `firebase-config.js` - Configuración de Firebase (opcional, cada página tiene su propia configuración)

## Uso

1. Abre `index.html` en tu navegador
2. Navega a las diferentes secciones usando los botones del menú
3. Las páginas están conectadas a Firebase Firestore

## Colecciones de Firebase

El sistema utiliza las siguientes colecciones en Firestore:

- **productos**: Almacena los productos de la carnicería
- **pedidos**: Almacena los pedidos realizados
- **clientes**: Almacena la información de los clientes
- **recetas**: Almacena las recetas disponibles

## Paleta de Colores

- Rosa Principal: `#B23A61`
- Rosa Claro: `#D46A8F`
- Rosa Oscuro: `#8B2D4A`
- Negro: `#000000`
- Blanco: `#FFFFFF`

## Características

- ✅ Diseño responsive
- ✅ Conexión a Firebase Firestore
- ✅ Interfaz simple y fácil de usar
- ✅ Paleta de colores de la marca Rosita
- ✅ Validación de formularios

