import { Crown, Shield, Wrench, Headphones } from 'lucide-react';

interface StaffMember {
  name: string;
  role: string;
  icon: typeof Crown;
  color: string;
}

const staffMembers: StaffMember[] = [
  { name: 'FrostKing', role: 'Owner', icon: Crown, color: 'text-amber-400' },
  { name: 'IceQueen', role: 'Co-Owner', icon: Crown, color: 'text-amber-400' },
  { name: 'SnowGuard', role: 'Admin', icon: Shield, color: 'text-red-400' },
  { name: 'GlacierDev', role: 'Developer', icon: Wrench, color: 'text-purple-400' },
  { name: 'AuroraHelper', role: 'Moderator', icon: Headphones, color: 'text-green-400' },
  { name: 'BlizzardMod', role: 'Moderator', icon: Headphones, color: 'text-green-400' },
  { name: 'TundraWatch', role: 'Helper', icon: Headphones, color: 'text-cyan-400' },
  { name: 'PolarAssist', role: 'Helper', icon: Headphones, color: 'text-cyan-400' },
];

const StaffSection = () => {
  return (
    <section id="staff" className="py-24 relative section-glow">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Staff Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the dedicated team that keeps Mountain SMP running smoothly. 
            Feel free to reach out for help or questions!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {staffMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={member.name}
                className="frost-card p-4 md:p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar placeholder with role icon */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-secondary to-card flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="font-heading text-2xl md:text-3xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-lg bg-card border border-border flex items-center justify-center ${member.color}`}>
                    <Icon className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>
                
                <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className={`text-xs md:text-sm font-medium ${member.color}`}>
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>

        {/* Join Staff CTA */}
        <div className="mt-16 text-center">
          <div className="frost-card inline-block p-8 max-w-xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              Want to Join the Team?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for dedicated players to help our community grow. 
              Apply on our Discord server!
            </p>
            <a
              href="#"
              className="frost-button inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-primary-foreground"
            >
              <Headphones className="w-5 h-5" />
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
