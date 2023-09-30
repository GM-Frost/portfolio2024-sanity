export default {
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'aboutTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'aboutImage',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'About this title',
    },
  ],
}
