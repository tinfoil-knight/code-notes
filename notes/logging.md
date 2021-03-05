---
title: Logging
tags: [backend, best-practices]
---
- Logging in files is faster than logging to a database as filesystem writes are faster.
- If logging in files, then remember to rotate the log or the disk will fill up.
- Write logs to `stdout`, re-direct them to files in production. The program prints to the terminal for the programmer while in development and write logs in production without changing code.

Attribution:
1. https://12factor.net/logs