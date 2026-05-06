import { Link } from 'react-router-dom';
import { Trophy, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t-4 border-surface-elevated mt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Trophy className="w-8 h-8 text-primary" />
              <span className="font-headline text-2xl font-black text-primary tracking-tighter uppercase italic">
                Iron & Impact
              </span>
            </Link>
            <p className="text-secondary font-sans leading-relaxed">
              We don't do 'fitness boxing'. We train athletes like professional fighters. 
              Our system is built on decades of ring experience and modern performance analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-headline text-sm font-black mb-6 text-on-surface">Links</h4>
              <ul className="space-y-4">
                <li><Link to="/programs" className="text-secondary hover:text-primary transition-colors uppercase text-sm">Programs</Link></li>
                <li><Link to="/trainers" className="text-secondary hover:text-primary transition-colors uppercase text-sm">Trainers</Link></li>
                <li><Link to="/membership" className="text-secondary hover:text-primary transition-colors uppercase text-sm">Membership</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-sm font-black mb-6 text-on-surface">Legal</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-secondary hover:text-primary transition-colors uppercase text-sm">Privacy</Link></li>
                <li><Link to="/" className="text-secondary hover:text-primary transition-colors uppercase text-sm">Terms</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-headline text-sm font-black mb-6 text-on-surface">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border-2 border-on-background flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border-2 border-on-background flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border-2 border-on-background flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t-2 border-surface-elevated flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-secondary font-headline text-xs uppercase tracking-widest">
            © 2024 IRON & IMPACT BOXING GYM. ALL RIGHTS RESERVED.
          </p>
          <p className="text-secondary font-headline text-xs uppercase tracking-widest">
            Forged in the trenches.
          </p>
        </div>
      </div>
    </footer>
  );
}
