import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { allCoreContent, sortPosts } from './pliny'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
