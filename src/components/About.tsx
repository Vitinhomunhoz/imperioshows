
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const About = () => {
  const features = [
    "Equipamentos de última geração",
    "Atendimento personalizado",
    "Profissionais altamente qualificados",
    "Compromisso com a qualidade e pontualidade",
    "Soluções completas para todos os tipos de eventos"
  ];

  return (
    <section id="sobre" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="relative rounded-lg overflow-hidden h-[500px]"
            style={{
              backgroundImage: "url('/placeholder.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-yellow-400/20"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <div className="bg-yellow-400 text-black font-bold px-6 py-3 inline-block rounded">
                +1000 EVENTOS REALIZADOS
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre a <span className="text-yellow-400">Império Shows</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Há mais de uma década, a Império Shows tem se destacado no mercado de eventos, 
              oferecendo soluções completas com excelência e profissionalismo. Nossa missão 
              é transformar momentos em memórias inesquecíveis, superando as expectativas dos 
              nossos clientes.
            </p>
            
            <p className="text-gray-300 mb-8">
              Trabalhamos com equipamentos de última geração e contamos com uma equipe altamente 
              qualificada, garantindo a qualidade em cada detalhe do seu evento.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              Conheça Nossa História
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
