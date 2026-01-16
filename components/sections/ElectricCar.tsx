import { Zap, ShieldCheck, Gauge } from "lucide-react";

const ElectricVehicleSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden bg-zinc-950 rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
          {/* Décoration subtile en arrière-plan */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Zap
              size={400}
              className="text-orange-600 translate-x-1/4 -translate-y-1/4 rotate-12"
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1fr_400px] gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 font-mono text-[10px] uppercase tracking-widest mb-6">
                  <Zap size={14} className="fill-current" /> Expertise Haute
                  Tension
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase italic tracking-tighter leading-none">
                  Spécialiste <br />
                  <span className="text-orange-600">Tesla & Électrique.</span>
                </h2>
              </div>

              <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
                La réparation d&apos;un véhicule électrique ne s&apos;improvise
                pas. De la structure spécifique des châssis **Tesla** à la mise
                en sécurité des batteries haute tension, nos carrossiers sont
                formés aux protocoles constructeurs les plus exigeants.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/5 text-orange-500">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-tight">
                      Habilitation électrique
                    </p>
                    <p className="text-zinc-500 text-xs mt-1">
                      Intervention sécurisée sur circuits HT
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/5 text-orange-500">
                    <Gauge size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-tight">
                      Respect garanties
                    </p>
                    <p className="text-zinc-500 text-xs mt-1">
                      Préservation de la garantie constructeur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-white font-heading text-xl font-black uppercase mb-4 tracking-tight">
                Votre Tesla <br />
                comme neuve
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Réparation aluminium spécifique",
                  "Calibrage des capteurs ADAS / Autopilot",
                  "Teintes d'origine Tesla respectées",
                  "Mise à jour et diagnostic après choc",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full py-4 bg-orange-600 hover:bg-orange-700 text-white text-center rounded-xl font-mono text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-lg shadow-orange-600/20"
              >
                Demander un devis Tesla
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricVehicleSection;
