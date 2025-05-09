
# 📝 TypeScript Basics – Blog Post

This blog post is about important TypeScript concepts written in simple English.

---

## 🔹 1. Differences Between Interfaces and Types

Both `interface` and `type` are used to describe the structure of an object in TypeScript.

### ✅ Interface
- Good for object shapes and class structures
- Can be extended
- Can merge (add more fields later)

```ts
interface User {
  name: string;
  age: number;
}

interface User {
  email: string; // this is allowed
}
```

### ✅ Type
- Can define object, union, tuple, primitive, etc.
- Cannot merge like interfaces
- Used for combining types

```ts
type User = {
  name: string;
  age: number;
};

type Admin = User & { role: string };
```

---

## 🔹 2. What is the `keyof` keyword?

`keyof` gets the keys of a type as a union of string literals.

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"
```

✅ Useful for making generic functions that work with object properties.

---

## 🔹 3. Difference between `any`, `unknown`, and `never`

| Type    | Meaning                                     | Example                                  |
|---------|---------------------------------------------|------------------------------------------|
| `any`   | Can be anything (unsafe)                    | `let a: any = 5;`                        |
| `unknown` | Can be anything, but must check before use | `let a: unknown = "test";`               |
| `never` | A value that never happens (errors, loops)  | `function fail(): never { throw new Error("fail"); }` |

---

## 🔹 4. What is the use of `enum`?

Enums give friendly names to sets of values.

### 🔸 Numeric Enum
```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up); // 0
```

### 🔸 String Enum
```ts
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED"
}

console.log(Status.Success); // "SUCCESS"
```

---

## 🔹 5. What is Type Inference?

TypeScript can guess the type of a variable even if we don’t write it.

```ts
let name = "Anamul"; // TypeScript knows this is a string
```

👍 **Why It’s Helpful**
- Makes code cleaner
- Saves time
- Still gives type safety

---

## 🔹 6. How TypeScript Helps Code Quality

TypeScript:
- Shows errors before running code (compile time)
- Helps with auto-complete in code editors
- Makes big projects easier to manage
- Prevents bugs by checking types
- Helps team collaboration

---

## 🔹 7. Union and Intersection Types

### 🔸 Union Type ( `|` ) – one of many types
```ts
function showId(id: string | number) {
  console.log(id);
}
```

### 🔸 Intersection Type ( `&` ) – combine multiple types
```ts
type Person = {
  name: string;
};

type Employee = {
  id: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Farhun",
  id: 100
};
```
