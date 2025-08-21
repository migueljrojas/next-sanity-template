import { getSettings } from '@/lib/sanity.query'

export default async function HomePage() {
  const settings = await getSettings()
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold">{settings?.title ?? 'Sitio'}</h1>
      <p className="mt-2 text-zinc-600">{settings?.description ?? 'Bienvenido a la plantilla Next + Sanity'}</p>
    </main>
  )
}
