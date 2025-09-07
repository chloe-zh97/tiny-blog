import { Authors, allAuthors } from '.contentlayer/generated'
import AuthorLayout from 'layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'chloe') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
