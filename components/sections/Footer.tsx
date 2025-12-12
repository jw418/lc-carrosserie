export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-center text-sm text-slate-600 sm:flex-row sm:text-left">
        <div>(c) {new Date().getFullYear()} LC Carrosserie. Tous droits reserves.</div>
        <div className="text-slate-500">Pied de page basique</div>
      </div>
    </footer>
  );
}
