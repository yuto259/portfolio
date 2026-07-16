import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-accent-300">404</p>
      <h1 className="mt-4 text-3xl font-bold text-white">ページが見つかりません</h1>
      <p className="mt-4 leading-7 text-zinc-300">
        指定されたページは存在しないか、URLが変更された可能性があります。
      </p>
      <Link className="mt-8 inline-flex rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-surface-950 transition hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300" href="/">
        トップページへ戻る
      </Link>
    </section>
  );
}
