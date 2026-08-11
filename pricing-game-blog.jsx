import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin } from 'lucide-react';

export default function PricingGameBlog() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Blog', id: 'blog' },
    { label: 'About', id: 'about' },
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 'intro',
      title: 'Why The Pricing Game? An Introduction',
      date: 'August 2024',
      excerpt: 'Welcome to The Pricing Game. This post explores why I started this blog and what draws me to the intersection of game theory, algorithms, and markets.',
      content: `
        <p>Welcome to The Pricing Game.</p>
        
        <p>For the past year, I've been fascinated by a simple question: <em>How do algorithms decide what things should cost?</em></p>
        
        <p>It sounds technical. But it's actually deeply about human behaviour, competition, and power. When you book a flight and see a price that changed hours ago. When Netflix adjusts your subscription based on your region. When restaurants use dynamic pricing to maximise revenue. These aren't random—they're the result of algorithms playing a game with each other and with us.</p>
        
        <h3>Why This Matters</h3>
        
        <p>My journey into this started with my Extended Project Qualification on game theory in airline route expansion. I studied how Ryanair and Lufthansa use strategic decisions to outmanoeuvre each other. Then I read Zuboff's work on surveillance capitalism and Ezrachi & Stucke's <em>Virtual Competition</em>—and realised the game had changed. Humans aren't just playing anymore. Algorithms are.</p>
        
        <p>This creates new problems: collusion without conspiracy, prices that exploit consumer psychology, and competitive dynamics that regulators don't fully understand. It also creates opportunities: better resource allocation, personalised value, innovation we couldn't have imagined.</p>
        
        <h3>What You'll Find Here</h3>
        
        <p>This blog explores the intersection of three things:</p>
        
        <p><strong>Game Theory:</strong> The mathematical logic of strategic interaction. How do actors behave when their payoffs depend on what others do? What can we learn from Axelrod's work on cooperation and defection?</p>
        
        <p><strong>Algorithms & AI:</strong> How computational systems execute strategy at scale and speed. What changes when machines are playing the game?</p>
        
        <p><strong>Regulation & Competition:</strong> How do we maintain healthy markets when the rules were written for a different era? What does fair competition mean in algorithmic markets?</p>
        
        <p>I'm writing this as a Year 12 student, not as an expert. My thinking is evolving. Some posts will be explorations of ideas I'm wrestling with. Others will be responses to current events—a pricing scandal, a regulatory announcement, a paper I've read. All of them will try to be rigorous but accessible.</p>
        
        <h3>Why You Should Care</h3>
        
        <p>If you're interested in finance, economics, technology, or competition policy—this matters. Algorithmic pricing isn't a niche topic anymore. It's reshaping how markets work, how companies compete, and how regulators think about their job.</p>
        
        <p>This is where the interesting problems are. This is where economics meets computer science meets ethics.</p>
        
        <p>Stick around.</p>
      `
    }
  ];

  const HomePage = () => (
    <div className="space-y-16 pb-12">
      {/* Hero */}
      <div className="pt-12 text-center space-y-4">
        <h1 className="text-5xl font-serif font-bold text-gray-900">The Pricing Game</h1>
        <p className="text-xl text-gray-600 font-light">Exploring game theory, algorithms, and how markets really work</p>
      </div>

      {/* About Section */}
      <section className="max-w-2xl mx-auto bg-gradient-to-br from-slate-50 to-white p-8 rounded-lg border border-slate-200">
        <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">About</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm an A-Level student exploring game theory, algorithmic pricing, and the dynamics of modern markets. Through research and industry experience, I'm investigating how artificial intelligence reshapes competition and how regulators respond to algorithmic market-making. This blog documents my thinking on the intersection of economics, technology, and strategy.
        </p>
      </section>

      {/* Featured Posts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900">Latest Posts</h2>
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer border-b-2 border-slate-200 pb-8 hover:border-slate-400 transition-colors"
            onClick={() => {
              setCurrentPage(`post-${post.id}`);
              window.scrollTo(0, 0);
            }}
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-500 font-medium tracking-wide">{post.date}</p>
              <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-slate-700 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
              <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors mt-4">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-serif font-bold mb-3">Stay Updated</h3>
          <p className="text-slate-300 mb-6">Get new posts delivered to your inbox. No spam, just rigorous thinking about markets.</p>
          
          {/* Mailchimp form will go here */}
          <div id="mc_embed_signup">
            <form action="https://gmail.us14.list-manage.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_LIST_ID" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll" className="space-y-3">
                <input type="email" placeholder="your@email.com" name="EMAIL" id="mce-EMAIL" required className="w-full px-4 py-3 bg-white text-gray-900 rounded placeholder-gray-500" />
                <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded transition-colors">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-4xl font-serif font-bold mb-8 text-gray-900">About The Pricing Game</h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          This blog explores the intersection of game theory, algorithmic decision-making, and market dynamics. I'm interested in how markets actually work in the age of AI—not just the theory, but the real-world consequences.
        </p>
        <p>
          My research spans airline economics, dynamic pricing, algorithmic collusion, and competition policy. I've worked in wealth management and asset management, which shaped how I think about incentives and strategic behaviour.
        </p>
        <p>
          These posts are my thinking in progress. Some are deep dives into theory. Others are responses to current events. All of them aim to be rigorous but accessible—I'm still learning, and I think that's honest to say.
        </p>
      </div>
    </div>
  );

  const BlogPage = () => (
    <div className="max-w-2xl mx-auto py-12 space-y-12">
      {blogPosts.map((post) => (
        <article key={post.id} className="cursor-pointer" onClick={() => {
          setCurrentPage(`post-${post.id}`);
          window.scrollTo(0, 0);
        }}>
          <p className="text-sm text-gray-500 font-medium tracking-wide mb-2">{post.date}</p>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3 hover:text-slate-700 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
          <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
            Read More →
          </button>
        </article>
      ))}
    </div>
  );

  const BlogPostPage = ({ postId }) => {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return <div>Post not found</div>;

    return (
      <article className="max-w-2xl mx-auto py-12">
        <button
          onClick={() => setCurrentPage('blog')}
          className="text-slate-600 hover:text-slate-900 text-sm font-medium mb-8 transition-colors"
        >
          ← Back to Blog
        </button>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm text-gray-500 font-medium tracking-wide">{post.date}</p>
            <h1 className="text-4xl font-serif font-bold text-gray-900">{post.title}</h1>
          </div>
          <div
            className="prose prose-lg max-w-none text-gray-700 space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    );
  };

  const isPostPage = currentPage.startsWith('post-');
  const postId = isPostPage ? currentPage.split('-')[1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 sticky top-0 bg-white z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => {
              setCurrentPage('home');
              setMenuOpen(false);
            }}
            className="text-2xl font-serif font-bold text-gray-900 hover:text-slate-700 transition-colors"
          >
            The Pricing Game
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMenuOpen(false);
                }}
                className={`font-medium text-sm transition-colors ${
                  currentPage === item.id
                    ? 'text-slate-900 border-b-2 border-slate-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-slate-200 bg-white">
            <div className="max-w-4xl mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left font-medium text-gray-600 hover:text-gray-900 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6">
        {isPostPage ? (
          <BlogPostPage postId={postId} />
        ) : currentPage === 'home' ? (
          <HomePage />
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : (
          <BlogPage />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-20 py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="flex gap-6">
            <a
              href="mailto:shea.a.ell@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              title="Email"
            >
              <Mail size={20} />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shea-ellis-288874388"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 The Pricing Game. All thoughts my own.
          </p>
        </div>
      </footer>
    </div>
  );
}
