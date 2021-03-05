---
title: Using cURL
link: https://curl.haxx.se/docs/manpage.html
---

## Get a Page
```bash
curl https://curl.haxx.se
```
> You can GET or POST to multiple URLs from a single command. (Not at the same time)

## Post some Data

### Form Fields `application/x-www-form-urlencoded`
```bash
curl --data "id=1905&press=20OK%20"  http://www.example.com/
```

### File Uploads `multipart/form-data`
```bash
curl --form upload=@localfilename --form press=OK [URL]
```
