"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "@/i18n/context";

type Status = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const { t, locale } = useT();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-t border-b hairline py-16 text-center"
      >
        <div className="eyebrow mb-4 text-clay">✶</div>
        <h3
          className="display mb-3"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
        >
          {t.booking.form.successTitle}
        </h3>
        <p className="mx-auto max-w-md text-ink/70">
          {t.booking.form.successBody}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate>
      <Section title="01">
        <Row>
          <Field label={t.booking.form.name} name="name" required />
          <Field label={t.booking.form.email} name="email" type="email" required />
        </Row>
        <Row>
          <Field label={t.booking.form.phone} name="phone" type="tel" />
          <Field label={t.booking.form.company} name="company" />
        </Row>
      </Section>

      <Section title="02">
        <SelectField
          label={t.booking.form.type}
          name="type"
          options={t.booking.form.typeOptions}
          required
        />
        <Row>
          <Field label={t.booking.form.date} name="date" type="date" required />
          <div className="grid grid-cols-2 gap-x-4">
            <Field label={t.booking.form.timeStart} name="timeStart" type="time" />
            <Field label={t.booking.form.timeEnd} name="timeEnd" type="time" />
          </div>
        </Row>
        <Row>
          <Field label={t.booking.form.crew} name="crew" type="number" min={1} />
          <Field label={t.booking.form.equipment} name="equipment" />
        </Row>
      </Section>

      <Section title="03">
        <Textarea
          label={t.booking.form.notes}
          name="notes"
          rows={5}
        />
      </Section>

      <div className="flex flex-col gap-4 border-t hairline pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-ink/50">{t.booking.form.requiredHint}</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          data-cursor="→"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-ink px-8 py-4 text-base font-medium text-bone disabled:opacity-50"
        >
          <span className="relative z-10">
            {status === "submitting"
              ? t.booking.form.submitting
              : t.booking.form.submit}
          </span>
          <span
            aria-hidden
            className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="rounded-md border border-clay/40 bg-clay/10 p-4 text-sm"
          >
            <strong className="block">{t.booking.form.errorTitle}</strong>
            <span className="text-ink/70">{t.booking.form.errorBody}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="grid grid-cols-1 gap-6 border-t hairline pt-8 md:grid-cols-12 md:gap-10">
      <legend className="eyebrow text-ink/40 md:col-span-1">{title}</legend>
      <div className="space-y-6 md:col-span-11">{children}</div>
    </fieldset>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-10">{children}</div>;
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
}) {
  return (
    <label className="group block">
      <span className="eyebrow mb-2 block text-ink/50">
        {label}
        {required && " *"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        className="block w-full border-b border-ink/20 bg-transparent py-2 text-base outline-none transition-colors placeholder:text-ink/30 focus:border-ink"
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  rows = 4,
}: {
  label: string;
  name: string;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block text-ink/50">{label}</span>
      <textarea
        name={name}
        rows={rows}
        className="block w-full resize-none border border-ink/15 bg-bone-deep/40 p-4 text-base outline-none transition-colors focus:border-ink"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block text-ink/50">
        {label}
        {required && " *"}
      </span>
      <div className="relative">
        <select
          name={name}
          required={required}
          defaultValue=""
          className="block w-full appearance-none border-b border-ink/20 bg-transparent py-2 pr-8 text-base outline-none transition-colors focus:border-ink"
        >
          <option value="" disabled>—</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-ink/40"
        >
          ↓
        </span>
      </div>
    </label>
  );
}
