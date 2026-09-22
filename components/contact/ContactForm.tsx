"use client";

import { useState, type FormEvent } from "react";

// Er is nog geen backend of e-maildienst (bv. Formspree of een serverless function) aan dit
// project gekoppeld. Om geen "verzonden"-gevoel te faken zonder dat er echt iets aankomt, opent
// dit formulier bij versturen de eigen mailapp van de bezoeker met het bericht al klaargezet naar
// info@verblijfparkdebrem.be. Zodra er een echte backend is, kan onSubmit hieronder vervangen
// worden door een echte verzendactie.

const inputClasses =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 font-body text-sm text-foreground placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Contactformulier van ${name || "de website"}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:info@verblijfparkdebrem.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="Uw naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
        />
        <input
          type="email"
          required
          placeholder="Uw e-mailadres"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
        />
      </div>
      <textarea
        required
        placeholder="Uw bericht"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`${inputClasses} resize-none`}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center font-display font-semibold text-sm rounded-md px-6 py-3 bg-clay text-white shadow-[0_4px_20px_rgba(184,135,61,0.35)] hover:bg-clay-dark hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(184,135,61,0.48)] active:translate-y-0 active:scale-[0.97] transition-[transform,box-shadow,background-color] duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-2"
      >
        Verstuur bericht
      </button>
      <p className="text-xs text-subtle text-center">
        Dit opent uw eigen mailprogramma met het bericht al klaargezet.
      </p>
    </form>
  );
}
