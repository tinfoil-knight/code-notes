---
title: Marshal/Unmarshal, Encode/Decode
tags: [go]
link: https://stackoverflow.com/questions/33061117/in-golang-what-is-the-difference-between-json-encoding-and-marshalling
---
Encoder / Decoder are used for streams while Marshal / Unmarshal are used for strings.
Use Marshal / Unmarshal when reading byte slices.
Use Encoder / Decoder when working with Reader, Writer or other streams.

Also see: [How to use JSON w/ Go](https://yourbasic.org/golang/json-example/)