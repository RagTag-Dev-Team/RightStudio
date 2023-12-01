const simpleHash = (str: string) => {
  let hash = 0

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)

    hash = (hash << 5) - hash + char
    hash |= 0 // Convert to 32bit integer
  }

  return hash
}

const hexToUniqueString = (hexCode: string) => {
  let hash = simpleHash(hexCode)
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let uniqueString = ''

  // Adjust hash to be positive
  if (hash < 0) {
    hash = -hash
    uniqueString += 'n' // Prefix for negative hashes
  } else {
    uniqueString += 'p' // Prefix for positive hashes
  }

  while (hash > 0) {
    uniqueString += alphabet.charAt(hash % 26)
    hash = Math.floor(hash / 26)
  }

  return uniqueString
}

export default hexToUniqueString
