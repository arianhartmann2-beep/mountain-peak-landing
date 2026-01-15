import { AlertTriangle, MessageSquare, Ban, Heart, Gamepad2, ShieldCheck } from 'lucide-react';

const rules = [
  {
    icon: MessageSquare,
    title: 'Be Respectful',
    description: 'Treat all players with respect. No harassment, hate speech, or discrimination of any kind.',
  },
  {
    icon: Ban,
    title: 'No Cheating',
    description: 'Hacked clients, exploits, and unfair advantages are strictly prohibited. Play fair.',
  },
  {
    icon: AlertTriangle,
    title: 'No Griefing',
    description: 'Do not destroy or modify other players\' builds without permission. Respect boundaries.',
  },
  {
    icon: Heart,
    title: 'Help New Players',
    description: 'We\'re a welcoming community. Help newcomers learn the ropes and feel at home.',
  },
  {
    icon: Gamepad2,
    title: 'Have Fun',
    description: 'This is a game! Enjoy yourself, make friends, and create amazing memories.',
  },
  {
    icon: ShieldCheck,
    title: 'Report Issues',
    description: 'See rule violations? Report them to staff via Discord or in-game. Don\'t mini-mod.',
  },
];

const RulesSection = () => {
  return (
    <section id="rules" className="py-24 relative section-glow bg-card/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bfff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Server <span className="text-primary">Rules</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our rules are designed to create a safe, fun environment for everyone. 
            Please read and follow them to be part of our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.title}
                className="frost-card p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                      {rule.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warning Notice */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="frost-card p-6 border-destructive/30 bg-destructive/5">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-lg font-bold text-foreground mb-1">
                  Breaking Rules Results in Action
                </h4>
                <p className="text-muted-foreground text-sm">
                  Violations may result in warnings, mutes, temp-bans, or permanent bans depending on severity. 
                  All decisions are made by our staff team and are final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
