function formatString(input: string, toUpper?: boolean): string {
  return toUpper === true || toUpper === undefined
    ? input.toUpperCase()
    : input.toLowerCase();
}
