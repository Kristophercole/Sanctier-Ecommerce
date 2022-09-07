export default {
  name: 'clothinglines',
  title: 'Clothing Lines',
  type: 'document',
  fields: [
    {
      name: 'clothinglines',
      title: 'Clothing Lines',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        hotspot: true,
      },
    },
  ],
};
