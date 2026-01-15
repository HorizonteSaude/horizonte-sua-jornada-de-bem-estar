import { MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = "https://wa.me/5531984116509?text=Olá! Não sei qual tratamento é ideal para mim. Pode me ajudar?";

const SpecialCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-gold shadow-gold mb-6">
            <Sparkles className="w-8 h-8 text-charcoal" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Não sabe qual tratamento é{' '}
            <span className="text-gradient-gold">ideal para você?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Converse com uma especialista e receba uma orientação personalizada em poucos minutos.
          </p>
          <Button
            variant="gold"
            size="xl"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Quero descobrir o melhor tratamento para mim
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialCTASection;
