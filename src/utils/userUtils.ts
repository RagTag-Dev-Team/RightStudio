const adjectives = ['Cool', 'Swift', 'Brave', 'Clever', 'Noble', 'Wise', 'Bold', 'Bright']
const nouns = ['Panda', 'Eagle', 'Lion', 'Fox', 'Wolf', 'Bear', 'Tiger', 'Hawk']

export const generateUsername = (): string => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  const number = Math.floor(Math.random() * 1000)

  return `${adjective}${noun}${number}`
}
