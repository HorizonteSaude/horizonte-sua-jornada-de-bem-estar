import { MessageCircle, XCircle, Scale, Frown, HeartCrack, BatteryLow, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = "https://wa.me/5531984116509?text=Olá! Preciso de ajuda com meu tratamento.";

const painPoints = [
  { icon: Scale, text: "Já tentou emagrecer várias vezes e nada funcionou" },
  { icon: XCircle, text: "Medo do efeito sanfona ou de engordar novamente" },
  { icon: Frown, text: "Dores constantes na coluna, pescoço ou ombros" },
  { icon: Moon, text: "As dores atrapalham o trabalho, sono ou rotina" },
  { icon: BatteryLow, text: "Sensação de ter perdido o controle do próprio corpo" },
  { icon: HeartCrack, text: "Autoestima afetada por causa do peso ou das dores" },
];

const PainPointsSection = () => {
  return (
    <section id="dores" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12">
            Você se identifica com alguma dessas situações?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-left text-foreground/90 font-medium">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-lg mb-8">
            Se você disse sim para alguma delas, saiba que você não está sozinho. Nós podemos te ajudar.
          </p>

          <Button
            variant="gold"
            size="xl"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Quero ajuda agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
