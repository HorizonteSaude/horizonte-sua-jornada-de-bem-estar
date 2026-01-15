import { MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = "https://wa.me/5531984116509?text=Olá! Gostaria de agendar uma visita.";

const locations = [
  {
    name: "Unidade Ouro Preto",
    address: "Rua Zilah Corrêa de Araujo, 84",
    neighborhood: "Ouro Preto, Belo Horizonte - MG",
  },
  {
    name: "Unidade Santa Lúcia",
    address: "Rua Professora Iracema Pimenta, 55",
    neighborhood: "Santa Lúcia, Belo Horizonte - MG",
  },
];

const LocationsSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4">
            Onde <span className="text-gradient-gold">Estamos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-background rounded-3xl p-8 shadow-soft border border-border hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {location.name}
                  </h3>
                  <p className="text-foreground">{location.address}</p>
                  <p className="text-muted-foreground">{location.neighborhood}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="whatsapp"
            size="xl"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
