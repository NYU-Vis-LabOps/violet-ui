export interface RankableOption {
  label: string
  value: string
  description?: string
}

export function scoreToken(
  token: string,
  visibleFields: string[],
  hiddenFields: string[]
): number {
  const t = token.toLowerCase()
  const visible = visibleFields.map((field) => field.toLowerCase())
  const hidden = hiddenFields.map((field) => field.toLowerCase())

  if (visible.some((field) => field === t)) return 0
  if (visible.some((field) => field.startsWith(t))) return 1
  if (visible.some((field) => field.includes(` ${t}`))) return 2
  if (visible.some((field) => field.includes(t))) return 3
  if (hidden.some((field) => field.includes(t))) return 4
  return Infinity
}

export function rankOptions<T extends RankableOption>(
  query: string,
  options: T[],
  getVisibleFields: (option: T) => string[],
  getHiddenFields: (option: T) => string[]
): T[] {
  const tokens = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)

  if (!tokens.length) return options

  const scored: Array<{ option: T; score: number; index: number }> = []
  options.forEach((option, index) => {
    const tokenScores = tokens.map((token) =>
      scoreToken(token, getVisibleFields(option), getHiddenFields(option))
    )
    if (tokenScores.some((score) => score === Infinity)) return
    scored.push({
      option,
      score: tokenScores.reduce((total, score) => total + score, 0),
      index,
    })
  })

  scored.sort((a, b) => a.score - b.score || a.index - b.index)
  return scored.map((item) => item.option)
}
