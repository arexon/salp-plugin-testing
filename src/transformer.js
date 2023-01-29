import { BAZ } from './bar/baz'

export const transform = (_, content) => {
  content.foo = BAZ
  content.bar = [BAZ, { ...content }, { ...content }]

  return content
}
