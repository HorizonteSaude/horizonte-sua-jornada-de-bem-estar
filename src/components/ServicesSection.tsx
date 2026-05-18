import { MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import treatmentPain from '@/assets/treatment-pain.jpg';
import serviceSlimming from '@/assets/service-slimming.jpg';
import serviceHarmonization from '@/assets/service-harmonization.jpg';
import serviceLaser from '@/assets/service-laser.jpg';

const WHATSAPP_SLIMMING = "https://wa.me/5531984116509?text=Olá! Gostaria de saber mais sobre o tratamento de emagrecimento.";
const WHATSAPP_PAIN = "https://wa.me/5531984116509?text=Olá! Gostaria de saber mais sobre quiropraxia e alívio de dores.";
const WHATSAPP_HARMONIZATION = "https://wa.me/5531984116509?text=Olá! Gostaria de saber mais sobre harmonização facial e corporal.";
const WHATSAPP_LASER = "https://wa.me/5531984116509?text=Olá! Gostaria de saber mais sobre depilação a laser.";

const services = [
  {
    title: "Emagrecimento com Segurança",
    subtitle: "Feito para mulheres que já tentaram de tudo e querem um método sem sofrimento e sem efeito sanfona.",
    benefits: [
      "Redução de medidas comprovada",
      "Planos personalizados",
      "Acompanhamento contínuo",
      "Autoestima renovada",
    ],
    image: serviceSlimming,
    cta: "Quero emagrecer com segurança",
    link: WHATSAPP_SLIMMING,
    accent: true,
  },
  {
    title: "Quiropraxia e Liberação Miofascial",
    subtitle: "Para pessoas com dores na coluna que limitam o dia a dia.",
    benefits: [
      "Alívio imediato",
      "Aumento da mobilidade",
      "Postura corrigida",
      "Vida leve novamente",
    ],
    image: treatmentPain,
    cta: "Quero aliviar minhas dores",
    link: WHATSAPP_PAIN,
    accent: false,
  },
  {
    title: "Harmonização Facial e Corporal",
    subtitle: "Realce sua beleza natural com procedimentos modernos, seguros e personalizados para cada tipo de pele e silhueta.",
    benefits: [
      "Resultados naturais e harmônicos",
      "Profissionais especializados",
      "Tecnologia de ponta",
      "Autoconfiança elevada",
    ],
    image: serviceHarmonization,
    cta: "Quero me harmonizar",
    link: WHATSAPP_HARMONIZATION,
    accent: false,
  },
  {
    title: "Depilação a Laser",
    subtitle: "Diga adeus aos pelos indesejados com tratamento eficaz, indolor e duradouro para corpo e rosto.",
    benefits: [
      "Resultados duradouros",
      "Procedimento seguro e confortável",
      "Pele lisa e renovada",
      "Tecnologia avançada",
    ],
    image: serviceLaser,
    cta: "Quero fazer depilação a laser",
    link: WHATSAPP_LASER,
    accent: true,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4">
            Tratamentos em <span className="text-gradient-gold">Destaque</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden shadow-elevated group ${
                service.accent ? 'bg-gradient-gold' : 'bg-card border border-border'
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              </div>
              <div className={`p-8 ${service.accent ? 'text-primary-foreground' : ''}`}>
                <h3 className={`text-2xl md:text-3xl font-serif font-semibold mb-3 ${
                  service.accent ? 'text-charcoal' : ''
                }`}>
                  {service.title}
                </h3>
                <p className={`mb-6 ${service.accent ? 'text-charcoal/80' : 'text-muted-foreground'}`}>
                  {service.subtitle}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                        service.accent ? 'text-charcoal' : 'text-primary'
                      }`} />
                      <span className={service.accent ? 'text-charcoal/90' : ''}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={service.accent ? "dark" : "gold"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    {service.cta}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
