import { useState, useEffect } from 'react';
import { Copy, Check, Users, Zap } from 'lucide-react';
import mountainBg from '@/assets/mountain-bg.jpg';

// Interface für die API-Antwort
interface MinecraftStatus {
  online: boolean;
  players: {
    now: number;
    max: number;
  };
}

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [playerCount, setPlayerCount] = useState<number | string>('...');
  const [isOnline, setIsOnline] = useState(true);
  
  // Ändere diese IP zu deiner Server-IP oder lass 'mc.hypixel.net' zum Testen
  const serverIP = 'mc.hypixel.net'; 

  // Funktion zum Abrufen der echten Spielerzahlen
  const fetchPlayerCount = async () => {
    try {
      const response = await fetch(`https://mcapi.us/server/status?ip=${serverIP}`);
      const data: MinecraftStatus = await response.json();
      
      if (data.online) {
        setPlayerCount(data.players.now);
        setIsOnline(true);
      } else {
        setPlayerCount(0);
        setIsOnline(false);
      }
    } catch (error) {
      console.error("API Fehler:", error);
      setPlayerCount('?');
    }
  };

  useEffect(() => {
    fetchPlayerCount();
    // Alle 60 Sekunden aktualisieren, um die API nicht zu überlasten
    const interval = setInterval(fetchPlayerCount, 60000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${mountainBg})`,
          transform: 'scale(1.1)',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up">
          {/* Status Badge - Reagiert jetzt auf isOnline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${isOnline ? 'animate-ping bg-green-400' : 'bg-red-400'}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {isOnline ? 'Server Online' : 'Server Offline'}
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Mountain</span>
            <span className="text-primary glow-text"> SMP</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join our thriving Minecraft community. Build, explore, and conquer the frozen peaks together.
          </p>

          <button
            onClick={copyToClipboard}
            className="frost-button inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-primary-foreground transition-all mb-8 bg-primary hover:bg-primary/90"
          >
            <Zap className="w-5 h-5" />
            <span>{serverIP}</span>
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
          
          <div className="h-6"> {/* Platzhalter für Copy-Text */}
            {copied && (
              <p className="text-primary text-sm mb-6 animate-fade-up">IP copied to clipboard!</p>
            )}
          </div>

          {/* Echte Player Count Anzeige */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">{playerCount}</span>
            <span className="text-muted-foreground">players online</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
            className="frost-button inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-primary-foreground transition-all mb-8"
          >
            <Zap className="w-5 h-5" />
            <span>{serverIP}</span>
            {copied ? (
              <Check className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
          
          {copied && (
            <p className="text-primary text-sm mb-6 animate-fade-up">IP copied to clipboard!</p>
          )}

          {/* Player Count */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">{playerCount}</span>
            <span className="text-muted-foreground">players online</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
