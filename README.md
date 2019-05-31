# fastclick-pro

```

npm i fastclick-pro
or 
yarn add fastclick-pro


```

优化fastclick的问题

- input和textarea的光标问题
- 支持服务端渲染（引入不会崩溃）
- 实例，直接挂载到fastclick本身

```
// a.js

import fastclick from 'fastclick';
fastclick.attach(document.body);

// b.js

import fastclick from 'fastclick';
// 直接在这里使用fastclick的自身方法，支持在其他的文件直接import并且使用
fastclick.instance.destroy();

```


