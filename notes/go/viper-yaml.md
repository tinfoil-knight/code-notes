---
title: Viper + YAML
tags: [go]
link: https://scene-si.org/2017/04/20/managing-configuration-with-viper
---

Example YAML configuration
```yaml
--- 
COLLECTION: contacts
DB: phonebook
MONGODB_URI: "mongodb://localhost:27017"
PORT: "8080"
```

Setting Config File
```go
package config

import (
	"log"

	"github.com/spf13/viper"
)

// Get : Gets config variables from the file
func Get(key string) string {
	viper.SetConfigName("config")
	viper.AddConfigPath(".")
	err := viper.ReadInConfig()

	if err != nil {
		log.Fatalf("Error while reading config file %s", err)
	}
	value, _ := viper.Get(key).(string)
	return value
}
```

Using Viper in Go
```go
package main

import (
    "fmt"
    "./config"
)

func main() {
    fmt.Println(config.Get('PORT'))
}

```