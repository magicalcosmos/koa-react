import * as Koa from 'koa';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import HelloWorld from './views/HelloWorld';
const app = new Koa();

app.use(async ctx => {
  let name = 'Barbara';
  ctx.body = ReactDOMServer.renderToStaticMarkup(<HelloWorld name={ name }/>);
});

app.listen(3000);