import { MessageCircle, Instagram, Heart } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5531984116509";
const INSTAGRAM_LINK = "https://instagram.com/horizontefisioterapia";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-serif text-3xl font-bold">
              <span className="text-gradient-gold">Horizonte</span>
            </span>
            <p className="text-cream/70">
              Saúde & Bem-estar
            </p>
            <p className="text-cream/60 text-sm">
              Desde 2010 cuidando de você.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-semibold">Contato</h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                (31) 98411-6509
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @horizontefisioterapia
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-semibold">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <a href="#inicio" className="text-cream/80 hover:text-gold transition-colors">
                Início
              </a>
              <a href="#quem-somos" className="text-cream/80 hover:text-gold transition-colors">
                Quem Somos
              </a>
              <a href="#servicos" className="text-cream/80 hover:text-gold transition-colors">
                Serviços
              </a>
              <a href="#depoimentos" className="text-cream/80 hover:text-gold transition-colors">
                Depoimentos
              </a>
              <a href="#contato" className="text-cream/80 hover:text-gold transition-colors">
                Contato
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Horizonte Saúde & Bem-estar. Todos os direitos reservados.
            </p>
            <p className="text-cream/60 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-gold fill-gold" /> para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
