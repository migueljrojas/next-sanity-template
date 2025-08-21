import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'settings',
      title: 'Ajustes del sitio',
      type: 'document',
      fields: [
        { name: 'title', title: 'Título', type: 'string' },
        { name: 'description', title: 'Descripción', type: 'text' }
      ]
    },
    {
      name: 'page',
      title: 'Página',
      type: 'document',
      fields: [
        { name: 'title', title: 'Título', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
        { name: 'content', title: 'Contenido', type: 'array', of: [{ type: 'block' }] }
      ]
    },
    {
      name: 'post',
      title: 'Post',
      type: 'document',
      fields: [
        { name: 'title', title: 'Título', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
        { name: 'excerpt', title: 'Resumen', type: 'text' },
        { name: 'cover', title: 'Portada', type: 'image', options: { hotspot: true } },
        { name: 'content', title: 'Contenido', type: 'array', of: [{ type: 'block' }] },
        { name: 'author', title: 'Autor', type: 'reference', to: [{ type: 'author' }] }
      ]
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'document',
      fields: [
        { name: 'name', title: 'Nombre', type: 'string' },
        { name: 'avatar', title: 'Avatar', type: 'image' }
      ]
    }
  ]
}
