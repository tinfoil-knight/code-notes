---
title: Simulate async API fetching in React
tags: [react]
link: https://www.roadtoreact.com/
---
```js
const initialStories = [ ... ];

const getAsyncStories = () =>
    new Promise(resolve =>
        setTimeout(
        () => resolve({ data: { stories: initialStories } }),
        2000
    )
);

const [stories, setStories] = React.useState([]);
React.useEffect(() => {
    getAsyncStories().then(result => {
        setStories(result.data.stories);
    });
}, []);
```