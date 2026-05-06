import { motion } from 'motion/react';
import { Target, Zap, Shield, Swords, Clock, TrendingUp } from 'lucide-react';

const battlefields = [
  {
    title: 'Boxing',
    desc: 'The sweet science. Focus on footwork, defensive pivots, and explosive combinations. Not for the faint of heart.',
    image: 'https://images.unsplash.com/photo-1552072047-3995874220b3?q=80&w=800&auto=format&fit=crop',
    intensity: 'Legendary',
    duration: '60 Min',
    category: 'Boxing',
  },
  {
    title: 'Muay Thai',
    desc: 'The art of eight limbs. Master the use of shins, knees, elbows, and fists in our most technical combat program.',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop',
    intensity: 'Elite',
    duration: '90 Min',
    category: 'Kickboxing',
    featured: true,
  },
  {
    title: 'Power Slam',
    desc: 'Explosive strength and conditioning designed for peak athletic output. Built for the grind.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    intensity: 'Intensive',
    duration: '45 Min',
    category: 'Conditioning',
  }
];

export default function Programs() {
  return (
    <div className="py-24 max-w-[1440px] mx-auto px-6">
      <header className="mb-24">
        <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase leading-none">
          CHOOSE YOUR <br />
          <span className="text-primary italic">BATTLEFIELD</span>
        </h1>
        <p className="text-xl text-secondary max-w-2xl font-sans">
          No fluff. No shortcuts. Just technical mastery and raw intensity. Find the discipline that transforms you from spectator to warrior.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        {battlefields.map((field, idx) => (
          <motion.div
            key={field.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`
              relative brutal-border bg-surface-elevated overflow-hidden group
              ${field.featured ? 'md:col-span-12 hard-shadow' : 'md:col-span-6'}
            `}
          >
            <div className={`flex flex-col ${field.featured ? 'md:flex-row' : ''}`}>
              <div className={`${field.featured ? 'md:w-1/2' : 'w-full'} aspect-[16/9] overflow-hidden`}>
                <img 
                  src={field.image} 
                  alt={field.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className={`p-12 flex flex-col justify-center ${field.featured ? 'md:w-1/2' : 'grow'}`}>
                <div className="flex items-center gap-3 mb-6 text-primary">
                  <Swords className="w-6 h-6" />
                  <span className="font-headline font-black text-xs uppercase tracking-[.2em]">{field.category}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">{field.title}</h2>
                <p className="text-secondary font-sans leading-relaxed mb-8">{field.desc}</p>
                
                <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t-2 border-surface">
                  <div>
                    <div className="font-headline text-[10px] font-black text-primary uppercase mb-1">Intensity</div>
                    <div className="font-headline text-lg font-black">{field.intensity}</div>
                  </div>
                  <div>
                    <div className="font-headline text-[10px] font-black text-primary uppercase mb-1">Duration</div>
                    <div className="font-headline text-lg font-black">{field.duration}</div>
                  </div>
                  <div>
                    <div className="font-headline text-[10px] font-black text-primary uppercase mb-1">Gear</div>
                    <div className="font-headline text-lg font-black">16oz</div>
                  </div>
                </div>
                
                <button className="btn-outline w-full md:w-fit uppercase">View Details</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Schedule Section teaser */}
      <section className="bg-surface-elevated brutal-border p-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase mb-2">Weekly Drill</h2>
            <p className="text-secondary">Find your slot. Show up. No excuses.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 brutal-border font-headline font-bold uppercase text-sm hover:bg-on-background hover:text-background transition-all">Prev Week</button>
            <button className="px-6 py-2 brutal-border-primary bg-primary text-background font-headline font-bold uppercase text-sm active:translate-x-1 active:translate-y-1">Next Week</button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-surface border-b-4 border-surface-elevated">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <th key={day} className="p-4 font-headline text-sm font-black uppercase text-secondary text-center border-r-2 border-surface-elevated last:border-0">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {[
                  { time: '06:00', class: 'Foundations' },
                  { time: '07:00', class: 'Power Slam' },
                  { time: '06:00', class: 'Muay Thai' },
                  { time: '06:00', class: 'Foundations' },
                  { time: '07:00', class: 'Power Slam' },
                  { time: '10:00', class: 'Open Mat' },
                  { time: '-', class: 'Closed' },
                ].map((item, i) => (
                  <td key={i} className="p-2 border-r-2 border-surface-elevated last:border-0 align-top h-48">
                    {item.time !== '-' && (
                      <div className="bg-surface p-4 brutal-border-primary border-2 hover:border-primary transition-all">
                        <div className="text-[10px] font-headline font-black text-primary mb-1">{item.time} AM</div>
                        <div className="text-sm font-black uppercase leading-tight">{item.class}</div>
                      </div>
                    )}
                    {item.time === '-' && (
                      <div className="flex items-center justify-center h-full opacity-25">
                         <span className="font-headline font-black uppercase rotate-90 text-xs">Gym Closed</span>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
