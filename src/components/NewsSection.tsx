import { Calendar, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
}

// Mock news data - will be replaced with database fetch
const mockNews: NewsItem[] = [
  {
    id: 1,
    title: 'Season 5 Launch Announcement',
    content: 'Get ready for our biggest update yet! Season 5 brings new biomes, custom enchants, and exciting events. Join us for the launch on February 1st at 8PM EST.',
    date: '2025-01-14',
    category: 'Update',
  },
  {
    id: 2,
    title: 'Winter Build Competition Results',
    content: 'Congratulations to all participants! Check out the amazing builds and see who won the 10,000 coin grand prize. Thank you for making this event a huge success!',
    date: '2025-01-10',
    category: 'Event',
  },
  {
    id: 3,
    title: 'New Anti-Cheat System Deployed',
    content: 'We\'ve implemented a state-of-the-art anti-cheat system to ensure fair play for everyone. Report any issues to our staff team on Discord.',
    date: '2025-01-05',
    category: 'Security',
  },
  {
    id: 4,
    title: 'Discord Server Overhaul',
    content: 'Our Discord has been completely redesigned with new channels, bots, and features. Join today to stay connected with the community!',
    date: '2025-01-02',
    category: 'Community',
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Update':
      return 'bg-primary/20 text-primary';
    case 'Event':
      return 'bg-accent/20 text-accent';
    case 'Security':
      return 'bg-destructive/20 text-destructive';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const NewsSection = () => {
  return (
    <section id="news" className="py-24 relative section-glow">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-primary">News</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and updates from Mountain SMP.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {mockNews.map((news, index) => (
            <article
              key={news.id}
              className="frost-card p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(news.category)}`}>
                  {news.category}
                </span>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  {new Date(news.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {news.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {news.content}
              </p>
              
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Read more
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
