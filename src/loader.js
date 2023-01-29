export const read = (path, { readTextFile }) => {
  const content = readTextFile(path)

  try {
    return JSON.parse(content)
  } catch (_) {
    return {}
  }
}

export const write = (path, content, { writeTextFile }) => {
  writeTextFile(path, JSON.stringify(content))
}
