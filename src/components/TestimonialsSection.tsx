import { MessageCircle, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = "https://wa.me/5531984116509?text=Olá! Quero ter resultados como os depoimentos que vi no site.";

const testimonials = [
  {
    text: "Finalmente consegui emagrecer sem medo. Aqui eu tive acompanhamento de verdade. Me sinto mais leve e confiante!",
    author: "Maria C.",
    treatment: "Emagrecimento",
  },
  {
    text: "Minhas dores diminuíram logo nas primeiras sessões. Voltei a ter vida! A equipe é muito atenciosa e profissional.",
    author: "Patrícia S.",
    treatment: "Quiropraxia",
  },
  {
    text: "Depois de anos tentando, foi aqui que consegui resultados reais. O acompanhamento faz toda a diferença.",
    author: "Fernanda L.",
    treatment: "Emagrecimento",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4">
            Quem viveu a experiência <span className="text-gradient-gold">conta</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-elevated transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="gold"
            size="xl"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Quero meu resultado também
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
