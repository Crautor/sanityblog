export default {
  name: 'news',
  type: 'document',
  title: 'Noticias',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titulo Da Noticia',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Sub Titulo Da Noticia',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descrição Da Noticia',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem da noticia',
    },
    {
      name: 'createdAt',
      title: 'Data da Noticia',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
  ],
}
