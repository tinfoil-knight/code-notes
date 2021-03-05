---
title: The Go Programming Language
tags: [go]
---

- `bufio` is used for streaming while `ioutil` is used for batch processing.
- Multiple variable of different types can be declared at once using the short notation.
- `new(T)` creates an unnamed variable of type T, initializes it with the zero value and returns its address.
- Keeping un-necessary pointers to short-lived objects within long-lived objects, especially global variables will prevent the garbage collector from reclaiming the short-lived objects.
- Tuple assignment in Go
  ```go
    func fibonacci(n int) int {
    x, y := 0, 1
    for i := 0; i < n; i++ {
    x, y = y, x+y
    }
    return x
    }
  ```
  All RHS expressions are evaluated before assignment.
- *Best Practice*: Packages in Go should have a doc comment. (Only one file; at the top of the package)
- `omitempty` in structs w/ JSON Field Tags specify that whenever the field has 0 value for its type, no output should be produced.
- `json.MarshalIndent()` pretty prints JSON.
- Go's garbage collector recycles unused memory but not unused OS resources like open files and network connections.
- Error messages must have a clear causal chain, e.g. from NASA's accident investigation:
  `genesis: crashed: no parachute: G-switch failed: ad relay orientation`
- Error messages must be self contained and avoid using capital letters and newlines when they are chained together.
- For errors that last for a short time, it might make sense to to retry failed operations with timeout, e.g. in case of connecting to a server.
- A function deferred using `defer` is mainly used to handle errors and clean up logic. These functions will run when the suceeding function has finished, either normally, with an error or by panicking.
- The right place for a `defer` call to close a resource is immidiately after it has been successfully acquired.
- Functions that just access or modify the internal values of a type are called *getters* and *setters*.