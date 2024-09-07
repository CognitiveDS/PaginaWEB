import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-brand-bg min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 text-brand-purple-light">
        <h1 className="text-4xl font-bold mb-8 text-center">Aviso de Privacidad</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-justify">
            Rodrigo de la Torre Sanchez y Jorge Daniel Carreon Guzman (en adelante, Cognitive Data Solutions), en su carácter de Responsables del tratamiento de los datos personales, pone a su disposición el presente Aviso de Privacidad Integral, el cual se encuentra regulado por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y sus normas secundarias.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Identificación del Responsable</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Tratante:</strong> Rodrigo de la Torre Sánchez y Jorge Daniel Carreón Guzmán</li>
              <li><strong>Nombre comercial:</strong> CognitiveDS</li>
              <li><strong>Giro:</strong> Agencia de Inteligencia Artificial y derivados</li>
              <li><strong>Sitio Web:</strong> cognitiveds.ai</li>
              <li><strong>Correo Electrónico:</strong> cognitiveds.ai@gmail.com</li>
              <li><strong>Domicilio:</strong> Periférico Paseo de la República #2149, Camelinas, 58290 Morelia, Michoacán</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dirigido a</h2>
            <p className="text-justify">
              Este Aviso de Privacidad va dirigido a todas las personas físicas o morales que utilicen los servicios de CognitiveDS o soliciten información sobre nuestros servicios de inteligencia artificial y derivados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Recolección de Datos Personales</h2>
            <p className="text-justify mb-4">
              En CognitiveDS recolectamos diversos datos personales. Te enumeramos los datos que se encuentran o se encontrarán en nuestra base de datos una vez hayas hecho contacto con nosotros o te prestemos alguno de nuestros servicios. A continuación, te describimos la finalidad de los datos que recolectamos:
            </p>
            <h3 className="text-xl font-semibold mb-2">Datos de Identificación:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Nombre Completo</li>
              <li>Edad</li>
              <li>Género</li>
              <li>Nacionalidad</li>
              <li>Registro Federal de Contribuyentes (RFC) o Registro Fiscal de tu país</li>
              <li>Fecha de Nacimiento</li>
              <li>Fotografía de Perfil de tus redes sociales</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Datos Financieros (para reembolsos):</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Número de Cuenta Bancaria</li>
              <li>Institución Financiera</li>
              <li>Número de Clave Interbancaria Estandarizada (CLABE)</li>
              <li>Número de Clave Internacional (SWIFT)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Datos de Contacto:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Correo Electrónico</li>
              <li>Número telefónico</li>
              <li>Nombres de usuario en redes sociales</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Datos de Navegación web:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Anuncios que visita en nuestro sitio</li>
              <li>Dirección IP desde la cual nos visita</li>
              <li>Fecha y hora de tu visita</li>
              <li>Información del navegador: programa y versión</li>
              <li>Información que intercambia con nuestro sitio</li>
              <li>Nombre del dominio de tu proveedor de servicio de Internet</li>
              <li>Páginas visitadas en nuestro sitio web</li>
              <li>Tipo de computadora o sistema operativo utilizado</li>
              <li>Ubicación: ubicación aproximada (según la red) y/o ubicación precisa (según el GPS y la red)</li>
              <li>Velocidad de tu conexión</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Obtención de tus Datos</h2>
            <p className="text-justify">
              La obtención de tus datos personales la realizamos en el momento en que te contactas a través de nuestros medios digitales, tales como nombre de usuario y demás datos visibles en tu perfil de cualquier medio digital o en el correo electrónico al momento de agendar una cita. También obtenemos datos si nos contactas por alguna red social o vía telefónica, así como aquellos datos que nos proporciones durante la conversación o una vez creada una relación de servicios profesional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Finalidad del Tratamiento de Datos Personales</h2>
            <h3 className="text-xl font-semibold mb-2">Finalidad Primaria:</h3>
            <p className="text-justify mb-4">
              La finalidad primaria es brindar un servicio de calidad para el desarrollo de nuestros servicios descritos en nuestras redes sociales, página web y diversas publicaciones en medios digitales sobre la automatización a través de Chatbots con programas de Inteligencia Artificial. A continuación, enumeramos el tratamiento de tus datos personales:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Gestionar el plan de compra</li>
              <li>Identificarte como cliente en nuestra base de datos</li>
              <li>Personalizar los proyectos de nuestros servicios a tus necesidades</li>
              <li>Enviar resúmenes de tu(s) compra(s)</li>
              <li>Identificar el avance de tu petición de compra</li>
              <li>Enviar resúmenes de nuestros servicios</li>
              <li>Elaborar y enviar comprobantes fiscales de las compras que realices</li>
              <li>Atender solicitudes de algún problema que presentes derivado de nuestros servicios</li>
              <li>Acceder a las redes sociales en las que desees implementar un Chatbot con la finalidad de llevar a cabo nuestros servicios</li>
              <li>Acceder al calendario destinado a agendar de forma autónoma la calendarización de citas con tus clientes</li>
              <li>Acceder al código fuente de tu página web así como de tu sistema de negocio en caso de requerir un Chatbot Automatizado</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Finalidad Secundaria:</h3>
            <p className="text-justify mb-2">Los datos personales también serán utilizados para:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Enviarte información relacionada con ofertas y nuevos planes</li>
              <li>Elaborar una segmentación con temas de tu interés</li>
              <li>Publicar tus comentarios e historias de tus redes sociales en nuestras plataformas digitales o redes sociales</li>
              <li>Elaborar estudios de mercado</li>
              <li>Elaborar estadísticas de uso</li>
              <li>Enviar encuestas de satisfacción</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Transferencia de Datos a Terceros</h2>
            <p className="text-justify mb-4">
              En cualquier momento de nuestra relación puedes hacer uso de tu Derecho de Oposición que regula la ley, así como ejercer tus derechos ARCO. Te informamos que los datos que nos proporcionas también serán utilizados por terceros ya que, para brindar nuestros servicios de tecnología de Inteligencia Artificial, dependemos de empresas como OpenAI OpCo, LLC, Celonis Inc. (MAKE), Alphabet, Inc. (Google), Replit Inc, At Manychat, Inc. (ManyChat) y Stripe Payments Mexico, S. de R.L. de C.V.
            </p>
            <p className="text-justify">
              Asimismo, te informamos que si una autoridad administrativa o jurisdiccional solicita información de tus datos personales, sólo procederemos a proporcionar dicha información cuando sea requerida por medio de un juez competente y notificada conforme a las leyes mexicanas. En dicho caso, te lo haremos saber.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Derechos ARCO</h2>
            <p className="text-justify mb-4">
              Los derechos ARCO son los derechos que tienes para solicitarnos acceder, rectificar, cancelar u oponerte a los datos personales que manejamos sobre ti. A continuación, te indicamos las solicitudes que puedes realizar conforme a los derechos ARCO:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Acceder a tus datos personales, en caso de que desees conocer los datos que CognitiveDS tiene sobre ti.</li>
              <li>Solicitar que realicemos correcciones o actualizaciones de tus datos personales, en caso de que alguno de nuestros datos esté erróneo o desactualizado.</li>
              <li>Solicitar que eliminemos tus datos personales, en caso de que desees terminar los servicios prestados por CognitiveDS. En algunas ocasiones no podremos cumplir con esta solicitud; para más detalles, consulta el artículo 26 de la Ley de Protección de Datos Personales en Posesión de Particulares.</li>
              <li>Oponerte a algún punto de las finalidades de nuestro Aviso de Privacidad. En caso de no estar conforme con la recolección de alguno o algunos datos personales, así como su manejo, puedes solicitar una oposición.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ejercicio de Derechos ARCO</h2>
            <p className="text-justify mb-4">
              Para ejercer tus derechos ARCO, deberás realizarlo de forma personal conforme a los siguientes puntos:
            </p>
            <p className="text-justify mb-4">
              Presentar un escrito libre en Periférico Paseo de la República #2149, Camelinas, 58290 Morelia, Michoacán en un horario de atención de 09 a 11 hrs, o bien enviar tu escrito a la dirección de correo electrónico cognitiveds.ai@gmail.com con el asunto 'Ejercicio de mis derechos ARCO'. El escrito deberá contener, como mínimo, los siguientes puntos:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Nombre completo del titular de los datos personales</li>
              <li>Forma en la que deseas ser contactado y contestar tu solicitud</li>
              <li>Número Telefónico</li>
              <li>Correo Electrónico</li>
              <li>Descripción clara y precisa del derecho o derechos que deseas ejercer, así como una breve explicación de tu solicitud</li>
              <li>Copia simple de una identificación oficial (INE, Cédula Profesional, Pasaporte, Cartilla Militar o Identificación de tu País)</li>
              <li>En caso de solicitar una corrección, adjuntar comprobantes o documentación legal que acredite dicho cambio</li>
              <li>Firma autógrafa idéntica a la identificación oficial proporcionada</li>
            </ul>
            <p className="text-justify mb-4">
              Una vez enviada tu solicitud, en CognitiveDS tenemos un plazo no mayor a 5 días hábiles para contestar tu solicitud. En caso de no requerir una aclaración, emitiremos una respuesta a tu petición. Si requerimos más información o aclaraciones, te notificaremos el requerimiento pertinente. Tendrás un plazo máximo de 10 días hábiles para enviarnos dicha información o aclaraciones.
            </p>
            <p className="text-justify">
              En un plazo no mayor a 20 días hábiles posteriores a recibir tu solicitud o después de haber realizado la contestación a nuestra petición de aclaración o proporción de más información, te contactaremos para comunicarte la respuesta a tu solicitud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Consentimiento</h2>
            <p className="text-justify mb-4">
              Te informamos que no recabamos ni tratamos datos personales de carácter sensible, por lo que no es necesario que manifiestes tu consentimiento de manera expresa en este documento para el tratamiento de tus datos personales.
            </p>
            <p className="text-justify">
              Salvo que ejerzas alguno de tus Derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO), límites el uso o revoques el consentimiento al tratamiento de tus datos personales, consideramos que aceptas lo establecido en el presente Aviso de Privacidad Integral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Autoridad Competente</h2>
            <p className="text-justify">
              Tras haber ejercido tus Derechos de Acceso, Rectificación, Cancelación u Oposición; haber limitado el uso o divulgación de tus datos personales, o haber revocado tu consentimiento al uso de tus datos personales, si consideras que hemos realizado alguna omisión o acción violatoria a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, te informamos que la autoridad mexicana competente ante la cual deberás interponer tu denuncia o inconformidad es el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Uso de Cookies y Web Beacons</h2>
            <p className="text-justify mb-4">
              En nuestro sitio web oficial cognitiveds.ai y sus subdominios, recabamos cookies y web beacons, información que nos permite conocer:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Anuncios que visitas en nuestra plataforma (en forma anónima)</li>
              <li>Dirección IP desde la cual nos visitas (en forma anónima)</li>
              <li>Fecha y hora de tu visita (en forma anónima)</li>
              <li>Información del navegador: programa y versión (en forma anónima)</li>
              <li>Información que intercambias con nuestra plataforma (en forma anónima)</li>
              <li>Nombre del dominio de tu proveedor de servicio de Internet (en forma anónima)</li>
              <li>Páginas visitadas en nuestra plataforma (en forma anónima)</li>
              <li>Tipo de computadora o sistema operativo utilizado (en forma anónima)</li>
              <li>Ubicación: ubicación aproximada (según la red) y/o ubicación precisa (según el GPS y la red) (en forma anónima)</li>
              <li>Velocidad de tu conexión (en forma anónima)</li>
            </ul>
            <p className="text-justify">
              En general, tu ubicación y tu actividad dentro de nuestra plataforma son utilizados para optimizar la búsqueda de tus servicios preferidos dentro de nuestro sitio web. Para oponerte a que recabemos estos datos sobre tu visita, te recomendamos consultar las guías de configuración de privacidad del navegador que utilizas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cambios al Aviso de Privacidad</h2>
            <p className="text-justify">
              En caso de alguna modificación de nuestro Aviso de Privacidad, serás notificado por medio del correo electrónico que proporcionaste al inicio de nuestra relación comercial y legal.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;