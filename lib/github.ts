import * as z from 'zod'

const schema = z.object({
  stargazers_count: z.number(),
})

export async function getGitHubStars() {
  const res = await fetch(
    'https://api.github.com/repos/Vette1123/next-starter-template-bun',
    { next: { revalidate: 600 } } // 10min
  )
  const json = await res.json()
  const github = schema.safeParse(json)

  if (!github.success) return 0
  return github.data.stargazers_count
}
