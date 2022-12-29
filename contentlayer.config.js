import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    subtitle:{
      type:'string',
      description:'The subtitle of the post',
      required:true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    keywords:{
      type:'string',
      description:'Meta Etiketleri',
      required:true
    }

  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/post/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'data/posts',
  documentTypes: [Post],
})