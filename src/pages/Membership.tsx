import { motion } from 'motion/react';
import { Check, Zap, TrendingUp, Activity } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    title: 'The Rookie',
    price: '49',
    features: ['3 Training Sessions / Week', 'Open Gym Access (AM)', 'Standard Locker Room'],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    title: 'The Fighter',
    price: '89',
    features: ['Unlimited Group Classes', '24/7 Gym Access', 'Monthly Assessment', 'Impact Training Gear Kit'],
    cta: 'Join The Ranks',
    featured: true,
  },
  {
    name: 'Elite',
    title: 'The Champion',
    price: '149',
    features: ['Everything in Pro Plan', '4 1-on-1 Coaching Sessions', 'Custom Nutrition Plan', 'Recovery Spa Access'],
    cta: 'Unleash Power',
  },
];

export default function Membership() {
  return (
    <div className="py-24 max-w-[1440px] mx-auto px-6">
      <header className="mb-24">
        <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase leading-none">
          FORGE YOUR <br />
          <span className="text-primary italic">LEGACY</span>
        </h1>
        <p className="text-primary font-headline font-black text-sm uppercase tracking-[.3em]">Choose Your Battle Plan</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        {tiers.map((tier, idx) => (
          <motion.div
            key={tier.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`
              relative brutal-border bg-surface p-10 flex flex-col
              ${tier.featured ? 'brutal-border-primary hard-shadow md:-translate-y-6 z-10' : 'opacity-80'}
            `}
          >
            {tier.featured && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-background font-headline font-black px-4 py-1 text-xs uppercase brutal-border">
                Most Popular
              </div>
            )}
            
            <div className="mb-12">
              <span className="font-headline text-xs font-black text-secondary uppercase tracking-widest">{tier.title}</span>
              <h2 className="text-5xl font-black uppercase mt-2">{tier.name}</h2>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-2xl font-black text-primary">$</span>
                <span className="text-7xl font-black leading-none">{tier.price}</span>
                <span className="text-secondary font-headline text-sm uppercase">/mo</span>
              </div>
            </div>

            <ul className="space-y-6 mb-16 grow">
              {tier.features.map(feature => (
                <li key={feature} className="flex items-center gap-4">
                  <div className="bg-primary/20 p-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-secondary font-sans font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`
              w-full font-headline font-black py-6 uppercase brutal-border transition-all active:translate-x-1 active:translate-y-1
              ${tier.featured ? 'bg-primary text-background' : 'bg-on-background text-background'}
            `}>
              {tier.cta}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Progress Section Teaser */}
      <section className="bg-surface-elevated brutal-border p-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
            PRECISION TRACKING FOR <br />
            <span className="text-primary">ELITE PERFORMANCE</span>
          </h2>
          <p className="text-lg text-secondary mb-12 max-w-xl font-sans">
            Our proprietary data system tracks every punch, every second, and every drop of sweat. Visualize your progress with sharp-edged metrics and minimalist tracking tools.
          </p>
          <div className="flex gap-6">
            <div className="brutal-border-primary p-6 flex flex-col items-center">
              <span className="text-4xl font-black">1.2M</span>
              <span className="text-[10px] font-black text-primary uppercase">Punches Logged</span>
            </div>
            <div className="brutal-border p-6 flex flex-col items-center">
              <span className="text-4xl font-black">98%</span>
              <span className="text-[10px] font-black uppercase">Success Rate</span>
            </div>
          </div>
        </div>

        <div className="bg-background brutal-border p-10">
          <div className="flex flex-col gap-10">
             <div className="flex justify-between items-end gap-2 h-48">
              {[40, 65, 50, 90, 75, 85, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  className="bg-primary w-full brutal-border border-2"
                />
              ))}
            </div>
            <div className="flex justify-between font-headline text-[10px] font-black text-secondary uppercase">
               {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => <span key={day}>{day}</span>)}
            </div>
            <div className="pt-8 border-t-2 border-surface-elevated flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-headline font-black text-xs uppercase tracking-widest text-primary">Power Output Increase +14%</span>
              </div>
              <Activity className="w-5 h-5 text-secondary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
