
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Music, Mic, Speaker, Lightbulb, Camera, Users } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Music className="h-10 w-10 text-yellow-400" />,
      title: "DJ Profissional",
      description: "Contamos com DJs experientes e equipamentos de alta qualidade para animar seu evento com os melhores ritmos."
    },
    {
      icon: <Mic className="h-10 w-10 text-yellow-400" />,
      title: "Sonorização",
      description: "Oferecemos sistemas de som profissionais com tecnologia de ponta para a melhor qualidade sonora."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-yellow-400" />,
      title: "Iluminação",
      description: "Criamos ambientes exclusivos com iluminação cênica, efeitos especiais e tecnologia LED."
    },
    {
      icon: <Camera className="h-10 w-10 text-yellow-400" />,
      title: "Foto e Vídeo",
      description: "Registramos todos os momentos do seu evento com qualidade profissional em fotos e vídeos."
    },
    {
      icon: <Speaker className="h-10 w-10 text-yellow-400" />,
      title: "Estrutura Completa",
      description: "Palco, tendas, mesas, cadeiras e toda estrutura necessária para seu evento."
    },
    {
      icon: <Users className="h-10 w-10 text-yellow-400" />,
      title: "Assessoria",
      description: "Planejamento completo do seu evento, desde a concepção até a execução."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-yellow-400">Serviços</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Oferecemos soluções completas para todos os tipos de eventos, com equipamentos de alta qualidade e profissionais experientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-black border border-zinc-800 hover:border-yellow-400/50 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-center text-xl text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-400">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
