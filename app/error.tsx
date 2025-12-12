"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center">
      <h1 className="text-2xl font-semibold text-slate-800">Une erreur est survenue</h1>
      <p className="max-w-lg text-sm text-slate-600">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="rounded bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Réessayer
      </button>
    </div>
  );
}
