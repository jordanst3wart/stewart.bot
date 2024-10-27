import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'

// i don't know what this does...
export const components: MDXComponents = {
  Image,
  a: CustomLink,
}
