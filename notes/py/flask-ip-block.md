---
title: Restrict API to allowed IPs
link: https://stackoverflow.com/questions/22251038/how-to-limit-access-to-flask-for-a-single-ip-address
tags: [python, flask]
---
> Note: This setup is to be used only when the server is behind a reverse proxy since the X-Forwarded-For header can be altered by the client maliciously.

```py
trusted_proxies = "127.0.0.1"
trusted_ips = ("213.48.56.132", "83.196.204.39")


@app.before_request
def limit_remote_addr():
    if os.environ.get("FLASK_ENV") == "production":
        remote = request.remote_addr
        route = list(request.access_route)
        while remote in trusted_proxies:
            remote = route.pop()
        if remote not in trusted_ips:
            abort(403)
```
