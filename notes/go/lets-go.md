---
title: Tips from Let's Go
tags: [go]
link: https://lets-go.alexedwards.net
---

- Don't use `http.DefaultServeMux` in production as it's a global variable which can be accessed by any third party package. Instead create a loccally scoped servemux like this:
  ```go
  mux := http.NewServeMux()
  mux.HandleFunc("/", home)
  err := http.ListenAndServe(":4000", mux)
  log.Printf(err)
  ```
- Longer URLs take precedence over smaller one's in Go's servemux. This means routes can be registered in any order.
- `http.Error()` is a utility that calls `w.WriteHeader()` and `w.Write()`. For example: `http.Error(w, "Method Not Allowed", 405)`
- Always set header through `w.Header().Set("Content-Type", "application/json")` to prevent JSON from being sent back as plaintext.
- Range requests are used for resumable downloads.
- Remember to sanitize file path using `filepath.Clean()` when using `http.ServeFile()` to prevent directory traversal attacks.
- Concurrency makes things fast but exposes shared resources to race conditions. These are solved using mutexes.
- Ports 0-1023 are restricted.
- Cmd line flags can be used for configuration using the `flag` functionality. They have default values for fallback. (Not available when using environment variables)
- `http.StatusText()` returns a human-readable string from HTTP Codes.
