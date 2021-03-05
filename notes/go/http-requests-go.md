---
title: HTTP Requests in Go
tags: [go]
---
> NOTE: Errors have been ignored here to keep this short and handy. Don't forget to implement error-handling.

**HTTP GET**
```go
res, _ := http.Get(url)
```

**HTTP POST**
```go
reqBody, _ := json.Marshal(map[string]string{"name": "Ryder", "phone": "9022457831"})
res, _ := http.Post(url, "application/json", bytes.NewBuffer(reqBody))
```

**HTTP PUT**
```go
client := &http.Client{}
reqBody, _ := json.Marshal(map[string]string{"phone": "9145636789"})
req, _ := http.NewRequest(http.MethodPut, url, bytes.NewBuffer(reqBody))
req.Header.Set("Content-Type", "application/json")
res, _ := client.Do(req)
```

**HTTP DELETE**
```go
client := &http.Client{}
req, _ := http.NewRequest(http.MethodDelete, url, nil)
res, _ := client.Do(req)
```