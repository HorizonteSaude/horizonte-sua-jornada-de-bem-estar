import { MessageCircle, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-banner-new.png';

const WHATSAPP_LINK = "https://wa.me/5531984116509?text=Olá! Gostaria de saber mais sobre os tratamentos da Horizonte.";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                Transformação Corporal e Alívio da Dor com{' '}
                <span className="text-gradient-gold">Cuidado, Ciência e Segurança</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Emagreça com resultados reais e duradouros.
                <br />
                <span className="font-medium text-foreground">Viva sem dor e retome sua leveza.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="gold"
                size="xl"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  Falar com a Horizonte
                </a>
              </Button>
              <Button
                variant="goldOutline"
                size="xl"
                asChild
              >
                <a href="#servicos">
                  Conheça nossos serviços
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">14+</span>
                </div>
                <span className="text-sm text-muted-foreground">Anos de<br />experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">3.5k</span>
                </div>
                <span className="text-sm text-muted-foreground">Atendimentos<br />realizados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <span className="text-sm text-muted-foreground">Unidades<br />em BH</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Equipe Horizonte Saúde & Bem-estar na recepção da clínica"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-gold rounded-2xl -z-10 opacity-60" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden lg:block">
          <a href="#dores" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Saiba mais</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
