'use strict';

fetch('https://my-json-server.typicode.com/StellVan/FL-12/users')
  .then(el => el.json())
  .then(d => console.log(d));
