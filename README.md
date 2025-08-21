# Template Next.js + Sanity (Vercel)

## 1) Usar como template
- Click en **Use this template** → crea repo del cliente.

## 2) Crear proyecto de Sanity
```bash
pnpm dlx sanity@latest init --reconfigure
# Project ID y dataset → copiar a .env.local
```

## 3) Variables de entorno (Vercel y local)
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_PREVIEW_SECRET` (string aleatorio)
- `SANITY_REVALIDATE_SECRET` (string aleatorio)
- `SANITY_API_READ_TOKEN` (opcional para preview)

## 4) Despliegue en Vercel
- Importa el repo.
- Define env vars en Vercel (Production/Preview/Development).
- Deploy.

## 5) Webhook de revalidación (Sanity → Next)
- URL: `https://TU_DOMINIO/api/revalidate`
- Header `x-vercel-reval-key: SANITY_REVALIDATE_SECRET`
- Filtros: `create/update/delete` de `settings, page, post, author`.

## 6) Preview (draft)
- `/api/preview?secret=SANITY_PREVIEW_SECRET&enable=true` para activar.
- `/api/preview?secret=SANITY_PREVIEW_SECRET&enable=false` para desactivar.

## 7) Studio
- `https://TU_DOMINIO/studio`
- Protege en producción con middleware o Vercel Protect.
