import { BAZ } from './bar/baz'

export const read = (path, { readTextFile }) => {
  const content = readTextFile(path)

  try {
    return JSON.parse(content)
  } catch (_) {
    return {}
  }
}

export const write = (path, content, { writeTextFile }) => {
  content.foo = BAZ

  writeTextFile(path, JSON.stringify(content))
}
