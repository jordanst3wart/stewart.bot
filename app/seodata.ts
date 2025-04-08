// SEO things
const customTitles: Record<string, string> = {
  nushell: 'Nushell',
  maps: 'Terraform Map',
  reactjs: 'React App Development Sydney',
  'Alternative jdk project layouts': 'Java Alternatives',
  'Exploring trade-offs of dynamic vs static typing': 'Python Programming Blog',
  bazel: 'Bazel Blog',
  frontend: 'Frontend Simplified',
  terraform: 'Terraform Maps',
  kotlin: 'Kotlin Advantages Over Java',
  dsl: 'DSLS',
}

// SEO things
export function getCustomTitles(key: string): string {
  if (key in customTitles) {
    return customTitles[key]
  }
  return key
}
