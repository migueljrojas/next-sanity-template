import S from 'sanity/desk'

export default () =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem().title('Ajustes').schemaType('settings').child(S.document().schemaType('settings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('page').title('Páginas'),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('author').title('Autores')
    ])
