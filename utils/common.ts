export const isBrowser = (): boolean => {
  return typeof window !== 'undefined'
}

export const matchMinMaxMediaQuery = (min: number, max: number) => {
  return window.matchMedia(`(min-width: ${min}px) and (max-width: ${max}px)`).matches
}
