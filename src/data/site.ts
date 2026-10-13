export const SITE = {
  name: 'Tello Ortiz Estudio Jurídico',
  shortName: 'Tello Ortiz',
  description:
    'Estudio jurídico en Lima especializado en derecho penal, civil, laboral y registral. Asesoría y defensa legal desde 2008.',
  foundingYear: 2008,
  email: 'telloortiz@estudiojuridico.com',
  phone: '+51966299980',
  whatsapp: [
    { label: '+51 966 299 980', number: '51966299980' },
    { label: '+51 948 182 267', number: '51948182267' },
  ],
  whatsappMessage: 'Hola, quisiera agendar una consulta con el Dr. Tello Ortiz.',
  hours: [
    { days: 'Lunes a sábado', time: '8:00 – 19:00', schema: 'Mo-Sa 08:00-19:00' },
    { days: 'Domingo', time: '10:00 – 16:00', schema: 'Su 10:00-16:00' },
  ],
  social: {
    tiktok: 'https://www.tiktok.com/@USUARIO',
    facebook: 'https://www.facebook.com/USUARIO',
    instagram: 'https://www.instagram.com/USUARIO',
  },
};

export const NAV_LINKS = [
  { href: '/especialidades', label: 'Especialidades' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
];

export const SPECIALTIES = [
  {
    slug: 'derecho-penal',
    title: 'Derecho Penal',
    summary:
      'Defensa técnica en investigaciones y procesos penales, desde la etapa fiscal hasta el juicio oral y las apelaciones.',
  },
  {
    slug: 'derecho-civil',
    title: 'Derecho Civil',
    summary:
      'Contratos, obligaciones, indemnizaciones, cobro de deudas y procesos de división, partición y nulidad de actos jurídicos.',
  },
  {
    slug: 'derecho-laboral',
    title: 'Derecho Laboral',
    summary: 'Despidos, liquidaciones, beneficios sociales y conflictos laborales, para trabajadores y empleadores.',
  },
  {
    slug: 'derecho-registral',
    title: 'Derecho Registral',
    summary:
      'Inscripción, regularización y saneamiento de bienes y derechos ante Registros Públicos, incluidas hipotecas.',
  },
];

export const LEGAL_LINKS = [
  { href: '/terminos-y-condiciones', label: 'Términos y condiciones' },
  { href: '/politica-de-privacidad', label: 'Política de privacidad' },
  { href: '/politica-de-cookies', label: 'Política de cookies' },
  { href: '/libro-de-reclamaciones', label: 'Libro de Reclamaciones' },
];

export const whatsappUrl = (number = SITE.whatsapp[0].number) =>
  `https://wa.me/${number}?text=${encodeURIComponent(SITE.whatsappMessage)}`;