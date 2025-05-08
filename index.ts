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

// Problem 4:

// Description:

//     Create a Vehicle class with private make and year properties and a getInfo() method.
//     Create a Car class extending Vehicle, adding a private model property and a getModel() method.

// Example:

// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
// myCar.getModel();  // Output: "Model: Corolla"

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
