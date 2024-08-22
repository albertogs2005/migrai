import SectionWrapper from "./SectionWrapper";
import Rectangle from './Rectangle';

export interface Service {
  title: string;
  content: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
}

const services: Service[] = [
  {
    title: "Consultoría en IA",
    content: "Ofrecemos consultoría especializada para integrar la inteligencia artificial en tu empresa. Nuestros expertos te guiarán en la identificación de oportunidades, selección de tecnologías adecuadas y la implementación de soluciones que mejoren tus procesos y resultados.",
    imgSrc: "/assets/images/consultoria.jpg",
    imgAlt: "Consultoría en IA",
    reverse: false,
  },
  {
    title: "Formaciones en IA",
    content: "Capacita a tu equipo con nuestras formaciones personalizadas en inteligencia artificial. Desde conceptos básicos hasta técnicas avanzadas, proporcionamos la formación que tu equipo necesita para aprovechar al máximo las capacidades de la IA.",
    imgSrc: "/assets/images/formacion.jpg",
    imgAlt: "Formaciones en IA",
    reverse: true,
  },
  {
    title: "Automatización de Procesos",
    content: "Automatiza procesos clave en tu empresa utilizando las últimas tecnologías de inteligencia artificial. Mejora la eficiencia, reduce errores y libera tiempo para que tu equipo se concentre en tareas de mayor valor.",
    imgSrc: "/assets/images/automatizacion.jpg",
    imgAlt: "Automatización de Procesos",
    reverse: false,
  },
  {
    title: "Desarrollo de Chatbots Personalizados",
    content: "Desarrollamos chatbots personalizados que se integran perfectamente en tu sistema, mejorando la atención al cliente, la captación de leads y la eficiencia operativa. Nuestros chatbots son capaces de entender y responder a las consultas de tus clientes en tiempo real.",
    imgSrc: "/assets/images/chatbots.jpg",
    imgAlt: "Desarrollo de Chatbots",
    reverse: true,
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-[#FDFDFD] text-[#161E20] py-16 px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
      <div className="flex flex-col space-y-8">
        {services.map((service, index) => (
          <Rectangle
            key={index}
            title={service.title}
            content={service.content}
            imgSrc={service.imgSrc}
            imgAlt={service.imgAlt}
            reverse={service.reverse}
            className="w-full sm:w-auto"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}