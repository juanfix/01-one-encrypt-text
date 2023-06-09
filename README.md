# 01-one-encrypt-text

## Challenge 1: encriptador y desencriptador de texto

Práctica:

Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

- La letra "e" es convertida para "enter"
- La letra "i" es convertida para "imes"
- La letra "a" es convertida para "ai"
- La letra "o" es convertida para "ober"
- La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:

```sh
"gato" => "gaitober"
gaitober" => "gato"
```

La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.

El resultado debe ser mostrado en la pantalla.

Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

## Stack

- React 18.2.0
- CSS3
- Javascript ES6

## Solución

### Ver Demo

Puedes ver el funcionamiento del proyecto en [Netlify](https://one-encrypt-text.netlify.app/)

## Servidor de desarrollo

1. Clonar el repositorio.
2. Ejecutar el comando `yarn` en la ruta del proyecto para instalar las dependencias.
3. Ejecutar el comando `yarn dev` para iniciar el servidor de desarrollo.
4. Navegar a la página `http://localhost:5173/`.
5. La aplicación cargará automáticamente cada que realice cambios en los archivos.
