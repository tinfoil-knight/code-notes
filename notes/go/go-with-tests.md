---
title: Learn Go w/ Tests
tags: [go, book]
link: https://quii.gitbook.io/learn-go-with-tests/
---

Specifying test input and assertion
```go
package main

import "testing"

func TestHello(t *testing.T) {
    got := Hello("Chris")
    want := "Hello, Chris"

    if got != want {
        t.Errorf("got %q want %q", got, want)
    }
}
```

Subtests & Refactoring Code
```go
func TestHello(t *testing.T) {

    assertCorrectMessage := func(t *testing.T, got, want string) {
        t.Helper()
        if got != want {
            t.Errorf("got %q want %q", got, want)
        }
    }

    t.Run("saying hello to people", func(t *testing.T) {
        got := Hello("Chris")
        want := "Hello, Chris"
        assertCorrectMessage(t, got, want)
    })

    t.Run("empty string defaults to 'World'", func(t *testing.T) {
        got := Hello("")
        want := "Hello, World"
        assertCorrectMessage(t, got, want)
    })

}
```
> `t.Helper()` is needed to tell the test suite that this method is a helper. By doing this when it fails the line number reported will be in our function call rather than inside our test helper.


**Testing Cycle**

- Write the test first
- Try and run the test
- Write the minimal amount of code for the test to run and check the failing test output
- Write enough code to make the test pass
- Refactor

**The TDD process and why the steps are important**
- Write a failing test and see it fail so we know we have written a relevant test for our requirements and seen that it produces an easy to understand description of the failure
- Writing the smallest amount of code to make it pass so we know we have working software
- Then refactor, backed with the safety of our tests to ensure we have well-crafted code that is easy to work with

Write examples for code
```go
func ExampleAdd() {
    sum := Add(1, 5)
    fmt.Println(sum)
    // Output: 6
}
```
> Note: Please note that the example function will not be executed if you remove the comment `//Output: 6`. Although the function will be compiled, it won't be executed.
> For more: [Testable Examples in Go](https://blog.golang.org/examples)
Also, this is the naming convention by Godoc:
```
func ExampleFoo()     // documents the Foo function or type
func ExampleBar_Qux() // documents the Qux method of type Bar
func Example()        // documents the package as a whole
```

Benchmarking in Go
```
func BenchmarkRepeat(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Repeat("a")
    }
}
```
- When the benchmark code is executed, it runs b.N times and measures how long it takes.
- To run the benchmarks do `go test -bench=.`
> For more: [Benchmarks](https://golang.org/pkg/testing/#hdr-Benchmarks)

- `reflect.DeepEqual` is useful for seeing if any two variables are the same (can be used to compare slices)(! not typesafe)

Interfaces

- We want to be able to write some kind of checkArea function that we can pass both Rectangles and Circles to, but fail to compile if we try to pass in something that isn't a shape.
```go
func (r Rectangle) Area() float64  {
    return r.Width * r.Height
}

func (c Circle) Area() float64  {
    return math.Pi * c.Radius * c.Radius
}

func TestArea(t *testing.T) {
    checkArea := func(t *testing.T, shape Shape, want float64) {
        t.Helper()
        got := shape.Area()
        if got != want {
            t.Errorf("got %g want %g", got, want)
        }
    }

    t.Run("rectangles", func(t *testing.T) {
        rectangle := Rectangle{12, 6}
        checkArea(t, rectangle, 72.0)
    })

    t.Run("circles", func(t *testing.T) {
        circle := Circle{10}
        checkArea(t, circle, 314.1592653589793)
    })

}

type Shape interface {
    Area() float64
}
```

- A gotcha that reference types introduce is that maps can be a `nil` value. A `nil` map behaves like an empty map when reading, but attempts to write to a nil map will cause a runtime panic.