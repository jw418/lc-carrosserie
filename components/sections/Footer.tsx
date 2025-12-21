export default function Footer() {
  return (
    <footer className="bg-card text-foreground py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black tracking-tighter mb-6 block text-primary">
              LC CARROSSERIE.
            </span>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              L'excellence en carrosserie automobile. <br />
              Nous allions artisanat traditionnel et services modernes pour une
              expérience sans contrainte.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground">Prestations</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Peinture",
                "Débosselage",
                "Restitution LLD",
                "Bris de Glace",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground">
              Zones d'intervention
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Aix-en-Provence", "Éguilles", "Marseille", "Venelles"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} LC Carrosserie. Tous droits
            réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">
              Mentions légales
            </a>
            <a href="#" className="hover:text-foreground">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
