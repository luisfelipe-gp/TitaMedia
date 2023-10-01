# Social Network App

Este es un proyecto de una aplicación web de una red social construida con React que te permite iniciar sesión utilizando un autenticador externo (Google) y realizar diversas acciones como ver posts, filtrar posts por etiquetas, ver comentarios y la información del usuario autenticado.

## Framework y API

- Framework: React
- API: [Social Network API](https://dummyapi.io/)

## Funcionalidades

### Iniciar Sesión
- La aplicación te permite iniciar sesión utilizando diversos autenticadores externos como Google, Facebook, etc.

### Ver Posts en el Home
- En la página principal (Home) puedes ver una lista de posts.

### Detalles de los Posts
- Cada post muestra la foto y el nombre del usuario que hizo el post, una imagen, el texto del post, las etiquetas (tags) asociadas, la cantidad de likes y comentarios.

### Modal de Comentarios
- Puedes abrir un modal que muestra todos los comentarios de un post específico.

### Modal de Información de Usuario
- También puedes abrir un modal que muestra toda la información del usuario que hizo un post.

### Filtrar Posts por Tag
- La aplicación te permite filtrar los posts por etiquetas (tags).

### Información del Usuario Autenticado
- La información del usuario autenticado se muestra en el header de la aplicación.

## Librerías Utilizadas

- [uuid](https://www.npmjs.com/package/uuid): Para generar identificadores únicos.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): Para la navegación entre páginas.
- [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google): Para la autenticación con Google.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias.

## Uso

1. Ejecuta `npm start` para iniciar la aplicación en modo de desarrollo.
2. Abre tu navegador y visita `http://localhost:3000` para utilizar la aplicación.

## Contribución

¡Estás invitado(a) a contribuir a este proyecto! Si tienes ideas, sugerencias o encuentras problemas, no dudes en abrir un [issue](https://github.com/tuusuario/social-network-app/issues) o enviar un [pull request](https://github.com/tuusuario/social-network-app/pulls).

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
