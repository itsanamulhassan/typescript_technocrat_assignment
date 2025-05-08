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

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

class Vehicle {
  constructor(private make: string, private year: number) {}

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length) {
    return products.reduce((max: Product, product: Product) =>
      product.price > max.price ? product : max
    );
  } else {
    return null;
  }
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day >= 0 && day <= 4) {
    return "Weekday";
  } else {
    return "Weekend";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
