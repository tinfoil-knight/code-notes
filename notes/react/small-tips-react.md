---
title: Little Things in React
tags: [frontend, react]
---

- Create a `.env` file. Prefix all variables with `REACT_APP_` and restart the developement server after adding new variables. *Note: Environment Variables in frontend are always exposed.*
- If hot-reloading stops working, `rm -rf node_modules` and check again.
- While using `react-router`, remember that the order of paths matter. So put `\` at last and similarly put less specific things later than more specific ones.
- Use a cleanup effect while data fetching through `useEffect` to avoid memory leaks which might not show up in errors. Ref: [Cancelling a Promise w/ React.useEffect](https://juliangaramendy.dev/use-promise-subscription/)
- Data Fetching in React:

```js
//  hooks.js
import { useState, useEffect } from "react";
import adminService from "./adminService";

 export const useAsync = (url, reqBody) => {
  const [data, setData] = useState(null);
  const hook = () => {
    let isSubscribed = true; // Prevents data fetching on unmounted components
    const fetchData = async () => {
      const resBody = await adminService.getData(url, reqBody);
      setData(resBody);
    };
    fetchData();
    return () => (isSubscribed = false);
  };
  useEffect(hook, [reqBody]);
  return [data];
};

// adminService.js
import axios from "axios";

async function getData(url, data) {
  console.log(url);
  try {
    const res = await axios.post(url, data);
    console.log(res);
    if (res.status === 200) {
      return res.data.statusCode === 200 ? res.data.results : null;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

export default {
  getData,
};
```