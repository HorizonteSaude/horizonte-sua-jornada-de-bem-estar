import { Award, Users, Syringe, Heart, CheckCircle2, Shield } from 'lucide-react';

const authorityPoints = [
  {
    icon: Award,
    title: "14+ anos",
    description: "de experiência em cuidado e estética",
  },
  {
    icon: Users,
    title: "Especialistas",
    description: "em emagrecimento, criolipólise e dor",
  },
  {
    icon: Syringe,
    title: "Pós-graduação",
    description: "em injetáveis e técnicas avançadas",
  },
  {
    icon: Heart,
    title: "Acompanhamento",
    description: "próximo e humano, do início ao fim",
  },
  {
    icon: CheckCircle2,
    title: "3.500+",
    description: "atendimentos realizados",
  },
  {
    icon: Shield,
    title: "Protocolos",
    description: "desenvolvidos para evitar rebote",
  },
];

const AuthoritySection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-dark text-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-light font-medium tracking-wider uppercase text-sm">
            Credibilidade
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 text-cream">
            Por que você está em <span className="text-gradient-gold">boas mãos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authorityPoints.map((point, index) => (
            <div
              key={index}
              className="bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                  <point.icon className="w-7 h-7 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-cream mb-1">
                    {point.title}
                  </h3>
                  <p className="text-cream/70">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
