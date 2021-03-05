---
title: React Native on Expo
link: https://docs.expo.io/
tags: [react]
---
- Start new project by `expo init` and choosing a template
- The mobile device should be on the same network for emulation in the expo client for phones.
- `View` component is already `box-sizing: border-box`
- Flexbox has `flexDirection:column` as default.
- Pass mutliple styles through array like this `{[]}`. For same properties, the elements at end have a preference.
- React Native doesn't use CSS so there is no cascading.
- Use `Platform` from `react-native` to control how elements appear in different operating systems.
- Pass data to navigation handlers like `() => handleClick('route', data)`.