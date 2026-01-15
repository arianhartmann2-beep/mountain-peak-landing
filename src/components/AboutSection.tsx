import { Pickaxe, Shield, Users, Sparkles, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: Pickaxe,
    title: 'Survival Experience',
    description: 'Pure vanilla-enhanced survival with quality of life improvements. Build your legacy in our persistent world.',
  },
  {
    icon: Shield,
    title: 'Grief Protection',
    description: 'Advanced land claiming and protection systems keep your builds safe from unwanted visitors.',
  },
  {
    icon: Users,
    title: 'Active Community',
    description: 'Join hundreds of active players in a friendly, welcoming environment with regular events.',
  },
  {
    icon: Sparkles,
    title: 'Custom Features',
    description: 'Unique custom enchants, items, and gameplay mechanics you won\'t find anywhere else.',
  },
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Enterprise-grade hosting ensures you can play whenever you want, lag-free.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Players from around the world with optimized connections for everyone.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative section-glow">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Our Server</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mountain SMP is more than just a Minecraft server - it's a community of passionate players 
            who share a love for building, exploring, and creating memories together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="frost-card p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '50K+', label: 'Total Players' },
            { value: '2+', label: 'Years Online' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
