import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clinicImage from '@/assets/clinic-interior.jpg';

const WHATSAPP_LINK = "https://wa.me/5531984116509?text=Olá! Gostaria de conhecer melhor a Horizonte.";

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={clinicImage}
                alt="Interior acolhedor da clínica Horizonte"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-gradient-gold text-primary-foreground rounded-2xl p-6 shadow-gold">
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold">2010</span>
                <span className="text-sm opacity-90">Desde</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Cuidar de Você Sempre Foi a{' '}
              <span className="text-gradient-gold">Nossa Essência</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Desde 2010, começamos levando cuidado até as pessoas com atendimento domiciliar.
              </p>
              <p className="text-lg">
                Hoje evoluímos para a <strong className="text-foreground">Horizonte Saúde & Bem-estar</strong>, um centro integrado onde combinamos estética avançada e terapias para alívio da dor.
              </p>
              <p className="text-lg font-medium text-foreground">
                Nossa missão: ajudar você a se sentir bem no próprio corpo, com segurança, ciência e acolhimento.
              </p>
            </div>
            <Button
              variant="goldOutline"
              size="lg"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Conhecer melhor
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
