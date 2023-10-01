export default {
    name: 'topTech',
    title: 'Top 4 Technology',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        description: 'Title of Technology',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    
};
