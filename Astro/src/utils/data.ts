const services = [
  {
    title: "Redes Sociales",
    description:
      "Las redes sociales en el mundo virtual, son sitios y aplicaciones que operan en niveles diversos como el profesional, de relación, entre otros. Cuando hablamos de redes sociales se viene a la mente lo que son Facebook, Twitter e Instagram.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16.5 7.5l0 .01" />
</svg><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
</svg>`,
  },
  {
    title: "Nube (Cloud)",
    description:
      "La nube permite que toda la información de una empresa este centralizada e integrada, y ésta es una de las herramientas más utilizadas para mantener la información actualizada y disponible en cada momento para su uso.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-computing" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6.657 16c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
  <path d="M12 16v5" />
  <path d="M16 16v4a1 1 0 0 0 1 1h4" />
  <path d="M8 16v4a1 1 0 0 1 -1 1h-4" />
</svg>`,
  },
  {
    title: "Movilidad",
    description:
      "Esta considerada como una tendencia que permite a los equipos de trabajo y empleados de una organización empresarial a trabajar en cualquier momento desde cualquier lugar, a través de los dispositivos móviles o en la nube con el objetivo de cumplir con las actividades y gestiones diarias de las empresas. ",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
  <path d="M11 4h2" />
  <path d="M12 17v.01" />
</svg>`,
  },
  {
    title: "Internet de las cosas (IoT)",
    description:
      "Básicamente todas las cosas están interconectadas a través de internet con el fin de mejorar la calidad de vida de los humanos. Las personas cada vez están más ocupadas con la cantidad de dispositivos que se crean y es muy difícil darle seguimiento a todo, las TD vienen para hacer más eficientes nuestros trabajos.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-network" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 20h7" />
  <path d="M14 20h7" />
  <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M12 16v2" />
  <path d="M8 16.004h-1.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-2.535" />
</svg>`,
  },
  {
    title: "Analisis de datos",
    description:
      "Esta herramienta facilita que la organización mejore la información que tiene disponible para la toma de decisiones. Convertir los datos de aplicaciones en representaciones visuales ayuda a  los clientes a describir conceptos, descubrir oportunidades, explorar opciones y llegar a tomar decisiones más optimas para el beneficio de las organizaciones. ",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-analytics" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M9 17l0 -5" />
  <path d="M12 17l0 -1" />
  <path d="M15 17l0 -3" />
</svg>`,
  },
  {
    title: "Inteligencia artificial (IA)",
    description:
      "La inteligencia artificial en sus sentido más natural, está referida al modo de simular las capacidades de la inteligencia del cerebro humano por lo que pensar en ella es también pensar en lo que nos hace posible interactuar y aprender, por lo tanto sus aplicaciones puede contribuir enormemente a la educación.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-topology-star-ring-3" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
  <path d="M6 12h4" />
  <path d="M14 12h4" />
  <path d="M15 7l-2 3" />
  <path d="M9 7l2 3" />
  <path d="M11 14l-2 3" />
  <path d="M13 14l2 3" />
  <path d="M10 5h4" />
  <path d="M10 19h4" />
  <path d="M17 17l2 -3" />
  <path d="M19 10l-2 -3" />
  <path d="M7 7l-2 3" />
  <path d="M5 14l2 3" />
</svg>`,
  },
];

export { services };
