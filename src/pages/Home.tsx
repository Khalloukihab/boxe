import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b-4 border-surface-elevated">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2400&auto=format&fit=crop" 
            alt="Boxing background" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full py-24">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9]">
              FORGED IN THE <br />
              <span className="text-primary italic">TRENCHES</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-10 max-w-xl font-sans">
              Elite boxing training for high-performance individuals. No fluff. Just sweat, science, and the pursuit of raw power.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/membership" className="btn-primary flex items-center justify-center gap-2 group">
                Start Training
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/programs" className="btn-outline flex items-center justify-center">
                View Schedule
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Quick Section */}
      <section className="bg-surface border-b-4 border-primary py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Pro Trainers', value: '15+' },
              { label: 'Elite Access', value: '24/7' },
              { label: 'Members', value: '500+' },
              { label: 'Excuses', value: '0%' },
            ].map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-l-4 border-primary pl-6 py-2"
              >
                <div className="font-headline text-5xl text-primary font-black">{stat.value}</div>
                <div className="font-headline text-sm font-bold text-secondary uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="py-24 max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 bg-surface-elevated brutal-border p-12 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6">WHY IRON & IMPACT?</h2>
            <p className="text-lg text-secondary max-w-lg mb-8 leading-relaxed">
              We focus on raw performance, technical precision, and mental fortitude. 
              Our trainers are battle-tested professionals who have spent decades in the ring.
            </p>
            <Link to="/membership" className="text-primary font-headline font-bold flex items-center gap-2 group underline decoration-4 underline-offset-8">
              Become a Member <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="md:col-span-4 bg-primary p-12 text-background hard-shadow-white flex flex-col items-center justify-center text-center">
            <Zap className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-black mb-4">HIIT INTENSITY</h3>
            <p className="font-sans font-medium">Burn up to 1000 calories in our signature Impact Sessions.</p>
          </div>
          
          <div className="md:col-span-4 bg-surface-elevated brutal-border p-12 flex flex-col items-center justify-center text-center">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-black mb-2">PRECISION</h3>
            <p className="text-secondary">Master the science behind every punch.</p>
          </div>
          
          <div className="md:col-span-8 bg-surface border-4 border-surface-elevated p-12 flex items-center justify-between gap-8">
            <div className="flex-1">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-black mb-2">RECOVERY LAB</h3>
              <p className="text-secondary max-w-sm">Full spectrum recovery including cryo and sports massage.</p>
            </div>
            <div className="hidden sm:block">
              <button className="btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
