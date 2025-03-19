
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  
  const categories = [
    { id: "todos", name: "Todos" },
    { id: "casamentos", name: "Casamentos" },
    { id: "corporativos", name: "Corporativos" },
    { id: "aniversarios", name: "Aniversários" },
    { id: "formaturas", name: "Formaturas" }
  ];
  
  // Simulação de projetos - substitua pelas imagens reais depois
  const projects = [
    { id: 1, category: "casamentos", image: "/placeholder.svg", title: "Casamento Maria e João" },
    { id: 2, category: "corporativos", image: "/placeholder.svg", title: "Evento Empresarial XYZ" },
    { id: 3, category: "aniversarios", image: "/placeholder.svg", title: "Aniversário de 15 anos" },
    { id: 4, category: "formaturas", image: "/placeholder.svg", title: "Formatura Turma 2023" },
    { id: 5, category: "casamentos", image: "/placeholder.svg", title: "Casamento Ana e Pedro" },
    { id: 6, category: "corporativos", image: "/placeholder.svg", title: "Feira de Negócios" }
  ];
  
  const filteredProjects = activeCategory === "todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nosso <span className="text-yellow-400">Portfólio</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conheça alguns dos eventos que realizamos e se inspire para o seu próximo projeto.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={
                activeCategory === category.id 
                  ? "bg-yellow-400 hover:bg-yellow-500 text-black" 
                  : "border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg h-72">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-yellow-400 mt-2">Ver projeto</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};
