import { getAllPageSlugs, getPageBySlug } from "@/lib/sanity.query";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

// Note the Promise<{ slug: string }> and the await
export default async function Page({ params }: any) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return <div className="p-6">No encontrada</div>;
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">{page.title}</h1>
      <div className="prose mt-4">
        <PortableText value={page.content} />
      </div>
    </main>
  );
}
