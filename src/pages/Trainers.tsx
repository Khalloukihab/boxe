import { motion } from 'motion/react';
import { User, Award, ShieldCheck, Zap } from 'lucide-react';

const trainers = [
  {
    name: 'Marcus "The Axe" Reed',
    role: 'Head Coach / 24-2 Pro Record',
    specialty: 'Footwork & Power',
    experience: '18 Years Pro',
    wins: '14 KO',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    name: 'Sara "Stinger" Vance',
    role: 'Technical Footwork',
    specialty: 'High-volume Counter-punching',
    experience: '12 Years Pro',
    image: 'https://images.unsplash.com/photo-1594381898514-64b5cdcb8c0d?q=80&w=800&auto=format&fit=crop',
    bio: 'Former national flyweight champion focusing on technical precision.',
  },
  {
    name: 'Victor Drago',
    role: 'Strength & Conditioning',
    specialty: 'Explosive Power',
    experience: '10 Years Coaching',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    bio: "Certified Olympic lifting specialist with a focus on athletes' physical peaks.",
  },
  {
    name: 'Elena "Ice" Kovak',
    role: 'Defensive Strategy',
    specialty: 'Shoulder Roll & Pocket Evasion',
    experience: '15 Years Experience',
    image: 'https://images.unsplash.com/photo-1518611012118-2969c63b07b7?q=80&w=800&auto=format&fit=crop',
    bio: 'Master the art of hitting without getting hit.',
  }
];

export default function Trainers() {
  return (
    <div className="py-24 max-w-[1440px] mx-auto px-6">
      <div className="border-l-4 border-primary pl-8 mb-24">
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          ELITE <br />
          <span className="text-primary italic">COMMANDERS</span>
        </h1>
        <p className="text-xl text-secondary max-w-2xl font-sans">
          Our trainers aren't just instructors. They are battle-tested professionals who have spent decades in the ring. 
          We strip away the fluff to focus on raw performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
        {/* Featured Trainer */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-12 lg:col-span-8 group relative brutal-border overflow-hidden bg-surface-elevated"
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img 
                src={trainers[0].image} 
                alt={trainers[0].name}
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
              <span className="bg-primary text-background font-headline font-black px-4 py-1 text-xs uppercase mb-6 inline-block w-fit">Head Coach</span>
              <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase leading-none">{trainers[0].name}</h2>
              <p className="font-headline text-primary font-bold uppercase tracking-widest text-sm mb-8">{trainers[0].role}</p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="font-headline text-xs font-black text-secondary uppercase mb-2">Specialty</div>
                  <div className="font-headline text-lg font-black">{trainers[0].specialty}</div>
                </div>
                <div>
                  <div className="font-headline text-xs font-black text-secondary uppercase mb-2">Wins</div>
                  <div className="font-headline text-lg font-black text-primary">{trainers[0].wins}</div>
                </div>
              </div>
              
              <button className="btn-outline w-full md:w-fit">View Profile</button>
            </div>
          </div>
        </motion.div>

        {/* Other Trainers */}
        {trainers.slice(1).map((trainer, idx) => (
          <motion.div 
            key={trainer.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="md:col-span-6 lg:col-span-4 brutal-border p-8 bg-surface-elevated flex flex-col"
          >
            <div className="w-24 h-24 brutal-border-primary mb-8 overflow-hidden">
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <h3 className="text-2xl font-black mb-1 uppercase leading-tight">{trainer.name}</h3>
            <p className="font-headline text-primary font-bold uppercase tracking-widest text-xs mb-6">{trainer.role}</p>
            <p className="text-secondary font-sans text-sm mb-12 grow">{trainer.bio}</p>
            
            <button className="btn-outline text-xs py-3">View Profile</button>
          </motion.div>
        ))}

        {/* Stats / Philosophy Card */}
        <div className="md:col-span-12 lg:col-span-4 bg-primary p-12 text-background hard-shadow-white flex flex-col items-center justify-center text-center">
          <Award className="w-16 h-16 mb-4" />
          <h3 className="text-4xl font-black mb-2 leading-none uppercase">5,000+ HOURS</h3>
          <p className="font-headline font-black text-xs uppercase tracking-[0.2em] mb-6">Of Combined Ringside Coaching</p>
          <div className="w-12 h-1 bg-background mb-6" />
          <p className="font-sans font-bold leading-relaxed">We don't coach hobbies. We build competitors.</p>
        </div>
      </div>

      {/* Recruitment CTA */}
      <section className="bg-surface border-4 border-primary p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-2">Want to Join the Crew?</h2>
          <p className="text-secondary">We are always looking for elite trainers with professional records.</p>
        </div>
        <button className="btn-primary whitespace-nowrap">Apply to Coach</button>
      </section>
    </div>
  );
}
