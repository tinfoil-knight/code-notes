---
title: Little Things in Go
tags: [go]
---
- The request body is closed by the `Server` itself and the `ServeHTTP` handler doesn't need to close it.