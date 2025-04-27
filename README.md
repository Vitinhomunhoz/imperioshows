Link para acessar o site: https://imperioshows.vercel.app
# Império Shows

Descrição breve do projeto.

## Instalação

Para instalar as dependências do projeto, execute:

```sh
npm install
```

## Uso

Para iniciar o projeto, execute:

```sh
npm run dev
```

## Estrutura do Projeto

```plaintext
.gitignore
bun.lockb
components.json
eslint.config.js
index.html
package.json
postcss.config.js
README.md
tailwind.config.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
    favicon.ico
    imperioshow.mp4
    placeholder.svg
src/
    App.css
    App.tsx
    index.css
    main.tsx
    vite-env.d.ts
    components/
        About.tsx
        Contact.tsx
        Footer.tsx
        Hero.tsx
        NavBar.tsx
        Portfolio.tsx
        Services.tsx
        Testimonials.tsx
        ui/
    hooks/
        use-mobile.tsx
        use-toast.ts
    lib/
        ...
    pages/
```

## Componentes

### Serviços

O componente `Services` exibe os serviços oferecidos pela empresa. Aqui está um trecho relevante:

```tsx
// filepath: c:\Users\Vito\Desktop\imperioshows\src\components\Services.tsx
/*...*/
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
            /*...*/
```

### Contato

O componente `Contact` permite que os usuários entrem em contato com a empresa. Aqui está um trecho relevante:

```tsx
// filepath: c:\Users\Vito\Desktop\imperioshows\src\components\Contact.tsx
/*...*/
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
          duration: 5000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      }, (error) => {
        toast({
          title: "Erro ao enviar mensagem",
          description: "Por favor, tente novamente mais tarde.",
          duration: 5000,
        });
      });
  };

  return (
    <section id="contato" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-yellow-400">Contato</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para tornar seu evento inesquecível. Entre em contato e solicite um orçamento.
          </p>
        </div>
      /*...*/
```

## imagens:


### Inicio:
![image](https://github.com/user-attachments/assets/d40bd93c-35de-4883-97f1-146a15678edd)

### Serviços:
![image](https://github.com/user-attachments/assets/0dc7c4d0-66c1-4603-9408-fff2041e3f6c)

### Sobre nós:
![image](https://github.com/user-attachments/assets/3f1f2e06-203a-46c8-92f8-5c74219b8f10)

### Portifólio:
![image](https://github.com/user-attachments/assets/7ecdc8bd-d8e4-482e-a609-e93228057129)

### Contato:
![image](https://github.com/user-attachments/assets/0f5ccada-8297-46b3-870b-7343cb87d3d7)

## Descrição:
![image](https://github.com/user-attachments/assets/e5a14824-34e2-4d37-8fee-116fa1a256ff)




