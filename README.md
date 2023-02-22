# Frontend Mentor - Intro component with sign up form solution

Esta es mi propuesta de solucion al reto [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

## Tabla de contenidos

- [Descripcion](#descripcion)
  - [El desafio](#el-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Mi proceso](#mi-proceso)
  - [Hecho con](#hecho-con)
  - [Lo aprendido](#lo-que-aprendi)
  - [Aprendiendo](#aprendiendo)
- [Autor](#autor)

## Descripcion

Esta es mi propuesta de solucion al desafio de crear un componente de registro con campos de formulario interactivos que en caso de no ser llenados correctamente muestran un mensaje de error.

En este caso se usa la metodologia Mobile First.

En el JavaScript se emplea el eventListener blur para escuchar cada vez que cada input pierde el foco, empleando los atributos de validity del evento para evaluar el contenido del input

## El desafio

El usuario deberia poder

- Ver el layout optimo dependiendo de su tamano de pantalla.
- Ver la interaccion cuando se coloca el mouse encima de los elementos.
- Recibir un mensaje de error cuando el `form` sea llenado si:
  - Cualquier `input` field esta vacio. El mensaje para este error es *"[Field Name] cannot be empty"*
  - La direccion de email no tiene el formato correcto (i.e. a correct email address should have this structure: `name@host.tld`). El mensaje para este error es *"Looks like this is not an email"*

## Screenshot

![](./images/screenshot.JPG)

## Links

- Solucion: [GITHUB](https://github.com/J-HernandezM/sign-up-form)
- Live site: [PAGES](https://j-hernandezm.github.io/sign-up-form/)

## Mi proceso

Para este ejercicio se me complico un poco la maquetacion y los estilos, me tomo un poco mas de tiempo de lo normal, sobretodo hacer que los tamanos y espaciados concuerden.

Aborde casi todos los contenedores empleando CSS GRID.

Para el JavaScript tuve que hacer revision de eventos que pudiera escuchar que me sirvieran, en este caso emplee el blur, y ademas tuve que buscar tambien que atributos podia obtener a partir de este evento para evaluar la validez o no del campo.

Lo demas se abordo con manejo de clases y condicionales.

Para lograr acomodar la imagen dentro del input tuve que encerrar cada input en contenedores separados y de ese modo aplicar position absolute para las imagenes.

## Hecho con

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- simple JavaScript

## Lo que aprendi

El evento blur y sus atributos target.validity.valid.

## Aprendiendo

Me gustaria en los siguientes proyectos seguir aplicando JavaScript asi sea basico para no olvidar las cositas que he aprendido.

## Autor

- Website - [Portfolio en construccion](https://j-hernandezm.github.io)
- Frontend Mentor - [@J-HernandezM](https://www.frontendmentor.io/profile/J-HernandezM)
- Github - [@J-HernandezM](https://github.com/J-HernandezM)
- Twitter - [@__HernandezM](https://www.twitter.com/__HernandezM)