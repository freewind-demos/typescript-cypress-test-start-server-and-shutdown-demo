TypeScript Cypress Test Start Server and Shutdown Demo
========================================================

关键就是用了[start-server-and-test](https://github.com/bahmutov/start-server-and-test)这个工具，
它可以启动server，等待资源，运行测试，关闭server。

如果要等待多个资源，使用`|`把多个资源分开。

```
npm install
npm run test
```
