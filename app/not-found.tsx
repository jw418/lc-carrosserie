export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-slate-50 px-6 text-center">
      <h1 className="text-3xl font-semibold text-slate-800">Page introuvable</h1>
      <p className="text-sm text-slate-600">La page demandée n&apos;a pas été trouvée.</p>
      <a
        href="/"
        className="rounded bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Retour à l&apos;accueil
      </a>
    </div>
  );
}
