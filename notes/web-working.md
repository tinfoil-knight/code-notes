---
title: Web working principles
link: https://astaxie.gitbooks.io/build-web-application-with-golang/en/03.1.html
---

After you type a URL, it takes the host part of the URL and sends it to a Domain Name Server (DNS) in order to get the IP address of the host.
Then it connects to the IP address and asks to setup a TCP connection.
The browser sends HTTP requests through the connection.
The server handles them and replies with HTTP responses containing the content that make up the web page. Finally, the browser renders the body of the web page and disconnects from the server.