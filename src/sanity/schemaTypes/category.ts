import { Rule } from "@sanity/types"; 
// schemas/category.js
export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().min(1).max(50),
      },
    ],
  }
  