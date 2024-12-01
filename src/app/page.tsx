'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CVDetallado() {
  const [activeTab, setActiveTab] = useState('sobre-mi')
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })

  const experiencia = [
    {
      puesto: "Directora Creativa",
      empresa: "Agencia Creativa XYZ",
      periodo: "2021 - Presente",
      responsabilidades: [
        "Liderar un equipo de 15 diseñadores y copywriters.",
        "Desarrollar estrategias creativas para clientes de Fortune 500.",
        "Aumentar la retención de clientes en un 30% a través de campañas innovadoras.",
        "Implementar un nuevo proceso de brainstorming que redujo el tiempo de conceptualización en un 25%."
      ]
    },
    {
      puesto: "Ejecutiva de Cuentas Senior",
      empresa: "PubliMark",
      periodo: "2018 - 2021",
      responsabilidades: [
        "Gestionar una cartera de clientes con un valor anual de 5 millones de euros.",
        "Liderar el desarrollo y ejecución de campañas multiplataforma.",
        "Aumentar los ingresos de los clientes existentes en un 40% a través de ventas cruzadas.",
        "Ganar 3 premios de la industria por campañas innovadoras."
      ]
    },
    {
      puesto: "Diseñadora Gráfica",
      empresa: "Estudio Creativo ABC",
      periodo: "2015 - 2018",
      responsabilidades: [
        "Crear identidades visuales para más de 50 marcas.",
        "Colaborar en el rediseño del sitio web de la empresa, aumentando el tráfico en un 150%.",
        "Desarrollar materiales de marketing que resultaron en un aumento del 25% en las ventas de los clientes.",
        "Mentora de 3 diseñadores junior, mejorando la eficiencia del equipo en un 20%."
      ]
    }
  ]

  const educacion = [
    {
      titulo: "Máster en Marketing Digital",
      institucion: "Universidad de Marketing Online",
      año: "2020"
    },
    {
      titulo: "Licenciatura en Diseño Gráfico",
      institucion: "Universidad Creativa",
      año: "2015"
    }
  ]

  const habilidades = [
    { nombre: "Adobe Creative Suite", nivel: 95 },
    { nombre: "Estrategia de Marketing", nivel: 90 },
    { nombre: "Gestión de Proyectos", nivel: 85 },
    { nombre: "Análisis de Datos", nivel: 80 },
    { nombre: "UX/UI Design", nivel: 88 },
    { nombre: "SEO/SEM", nivel: 82 },
    { nombre: "Copywriting", nivel: 87 },
    { nombre: "Presentaciones", nivel: 92 }
  ]

  const logros = [
    "Premio a la Mejor Campaña Digital 2022 - Asociación de Marketing",
    "Ponente principal en la Conferencia de Diseño Creativo 2021",
    "Publicación en la revista 'Marketing Innovador' - Artículo sobre tendencias en publicidad digital",
    "Voluntaria en 'Diseño para el Cambio' - Proyecto de branding para ONG local"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    alert('Gracias por tu mensaje. Te contactaremos pronto.')
    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      <header className="bg-white shadow-md py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">María García</h1>
          <p className="mt-2 text-xl text-gray-600">Directora Creativa & Estratega de Marketing</p>
        </div>
      </header>

      <nav className="bg-white shadow-md mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {['sobre-mi', 'experiencia', 'educacion', 'habilidades', 'logros', 'contacto'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === tab
                      ? 'border-purple-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {activeTab === 'sobre-mi' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900">Sobre Mí</h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Perfil Profesional</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Soy una profesional creativa con más de 8 años de experiencia en publicidad y marketing digital. 
                      Mi pasión es desarrollar estrategias innovadoras que conecten marcas con audiencias de manera significativa. 
                      Combino mi experiencia en diseño gráfico con un profundo entendimiento del marketing digital para crear 
                      campañas impactantes y efectivas.
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Enfoque</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Mi enfoque se centra en la integración de estrategias creativas con análisis de datos para maximizar el ROI. 
                      Creo firmemente en la importancia de mantenerse actualizado en las últimas tendencias y tecnologías del sector 
                      para ofrecer soluciones innovadoras y efectivas a los clientes.
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Objetivos Profesionales</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Busco continuar creciendo profesionalmente en un entorno que valore la innovación y la creatividad. 
                      Mi objetivo es liderar equipos creativos en el desarrollo de campañas revolucionarias que no solo cumplan, 
                      sino que superen las expectativas de los clientes y establezcan nuevos estándares en la industria.
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          )}

          {activeTab === 'experiencia' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900">Experiencia Profesional</h2>
              </div>
              <div className="border-t border-gray-200">
                {experiencia.map((trabajo, index) => (
                  <div key={index} className="px-4 py-5 sm:p-6 border-b border-gray-200 last:border-b-0">
                    <h3 className="text-lg font-medium text-gray-900">{trabajo.puesto}</h3>
                    <p className="mt-1 text-sm text-gray-600">{trabajo.empresa} | {trabajo.periodo}</p>
                    <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                      {trabajo.responsabilidades.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'educacion' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900">Educación</h2>
              </div>
              <div className="border-t border-gray-200">
                {educacion.map((edu, index) => (
                  <div key={index} className="px-4 py-5 sm:p-6 border-b border-gray-200 last:border-b-0">
                    <h3 className="text-lg font-medium text-gray-900">{edu.titulo}</h3>
                    <p className="mt-1 text-sm text-gray-600">{edu.institucion} | {edu.año}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'habilidades' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900">Habilidades</h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {habilidades.map((habilidad, index) => (
                    <div key={index} className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                            {habilidad.nombre}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-purple-600">
                            {habilidad.nivel}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                        <div style={{ width: `${habilidad.nivel}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'logros' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900">Logros y Reconocimientos</h2>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {logros.map((logro, index) => (
                    <li key={index} className="px-4 py-4 sm:px-6">
                      <p className="text-sm text-gray-700">{logro}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === 'contacto' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold text-gray-900">Contacto</h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      id="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2023 María García. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

