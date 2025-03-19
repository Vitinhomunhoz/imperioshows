
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "A Império Shows superou todas as nossas expectativas! Desde o atendimento inicial até o término do evento, tudo foi perfeito.",
      author: "Maria Silva",
      company: "Casamento em São Paulo"
    },
    {
      quote: "Contratamos para o evento da nossa empresa e ficamos impressionados com a qualidade dos equipamentos e o profissionalismo da equipe.",
      author: "João Oliveira",
      company: "Diretor de Marketing - Empresa XYZ"
    },
    {
      quote: "A festa de 15 anos da minha filha foi incrível! Todos os convidados elogiaram a música, a iluminação e a organização.",
      author: "Ana Santos",
      company: "Aniversário de 15 anos"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos <span className="text-yellow-400">Clientes Dizem</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho. Confira alguns depoimentos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-yellow-400/50 transition-all">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-yellow-400 mb-4" />
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div 
                    className="h-12 w-12 rounded-full bg-yellow-400 mr-4"
                    style={{
                      backgroundImage: "url('/placeholder.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
