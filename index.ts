function formatString(input: string, toUpper?: boolean): string {
  return toUpper === true || toUpper === undefined
    ? input.toUpperCase()
    : input.toLowerCase();
}

interface Book {
  title: string;
  rating: number;
}
function filterByRating(items: Book[]): Book[] {
  return items.filter((singleItem: Book) => singleItem.rating >= 4);
}
