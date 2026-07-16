"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("これはサンプルフォームです。現在は送信機能を実装していません。");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-surface-850 p-6">
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white">お名前</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            className="rounded-md border-white/15 bg-surface-950 text-white placeholder:text-zinc-500 focus:border-accent-300 focus:ring-accent-300"
            placeholder="山田 太郎"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white">メールアドレス</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="rounded-md border-white/15 bg-surface-950 text-white placeholder:text-zinc-500 focus:border-accent-300 focus:ring-accent-300"
            placeholder="your@example.com"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white">内容</span>
          <textarea
            name="body"
            rows={6}
            className="rounded-md border-white/15 bg-surface-950 text-white placeholder:text-zinc-500 focus:border-accent-300 focus:ring-accent-300"
            placeholder="お問い合わせ内容を入力してください"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-surface-950 transition hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300"
      >
        サンプル送信
      </button>
      {message ? (
        <p role="status" className="mt-4 rounded-md border border-accent-400/30 bg-accent-400/10 px-4 py-3 text-sm text-accent-100">
          {message}
        </p>
      ) : null}
    </form>
  );
}
