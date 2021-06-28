require('@babel/register')({
  ignore: [/node_modules\/(?!conekta-places-lib)/],
});
require('./entry');
