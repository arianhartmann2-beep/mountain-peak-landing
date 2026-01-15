import { Mountain, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Mountain className="w-6 h-6 text-primary" />
            <span className="font-heading text-lg font-bold text-foreground">
              Mountain<span className="text-primary">SMP</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Discord
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Store
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Vote
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2025 Mountain SMP. Not affiliated with Mojang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
