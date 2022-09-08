# prueba_jest_react_vite
Pruebas basicas que incluyen pruebas async, de eventos, contenido del objeto render y librerias test.


Crear otro proyecto de 0 y como guia este entonces\
yarn create vite\
//    después asigna nombre al proyecto\
//    selecciona el framework react\
//    selecciona la variante react la cual trabaja con javascript, la otra con ts trabaja con typescript\
cd nombre_proyecto\
yarn install\
yarn add prop-types\
yarn add --dev jest\
yarn test  //segun como este el package.json \
//Para ejecutarlo  todo el tiempo\
    {\
      "scripts": {\
        "test": "jest --watchAll"\
      }\
    }\
yarn add -D @types/jest\
yarn add --dev babel-jest @babel/core @babel/preset-env\
//Crear/Renombrar archivos babel.config.cjs\
    module.exports = {\
        presets: [\
          ['@babel/preset-env', { targets: { esmodules: true } }],\
          ['@babel/preset-react', { runtime: 'automatic' }],\
        ],\
    };\
//Los archivos de test crear con el esquema "archivo.test.js"\
//Crear jest.config.cjs\
\
   module.exports = {\
       testEnvironment: 'jest-environment-jsdom',\
       setupFile: ['./jest.setup.js']\
   }\
//Crear archivo jest.setup.js\
   import 'whatwg-fetch';\
yarn add -D whatwg-fetch\
yarn add --dev @testing-library/react\
yarn add --dev react-test-renderer\
yarn add -D jest-environment-jsdom\
yarn add -D @babel/preset-react\
