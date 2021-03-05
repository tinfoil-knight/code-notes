---
title: Programming in Java
link: 
---
**First Program**
```java
public class FirstProgram {
	public static void main(String[] args){
		// Program goes here
		System.out.println("Hello World");
	}
}
```
> The name of the program has to be `main` for a public class.

**I/O**
```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Write a message: ");
        String message = scanner.nextLine();
        System.out.println(message);
    }
}
```
- Scanner takes in strings only. Convert them to numeric format if needed.
- Some data types: `boolean`, `int`, `double`, `String`
- `Double.valueOf('some numeric string')` converts string to floating point. Related: `Integer.valueOf()`
- `Boolean.valueOf()` is true for any case insenstive string that's spelled true and false for everything else.
- Strings can be concatenated using `+`.
- Conditional Statements & Loops: `if`, `else`, `else if`,`while`. `for`
- A variable is scoped to the function.
- Styling: Indent the code using `Tabs` and use `camelCase` for naming.
- Don't compare strings with `==` operator, use `firstString.equals(secondString)`
- Logical Operators: `&&`, `||`, `!`

> Comments: Java is mostly like C in regard to syntax.

Custom methods
 ```
public class Example {
    public static void main(String[] args) {
        sum(3, 5);
       
        int number1 = 2;
        int number2 = 4;
       
        sum(number1, number2);       
    }
   
    public static void sum(int first, int second) {
        System.out.println("" + first + " + " + second + " = " + (first+ second));
    }
}
```
- Parameter values passed to functions are copied.
- If the method doesn't return a value then keyword `void` is used. Else the return type is specified.



