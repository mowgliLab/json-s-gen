# JSON S Generator

A generator of JSON schema in TypeScript.

Inspired by the JS version [json-schema-generator](https://www.npmjs.com/package/json-schema-generator)
this generator is written in TypeScript. It is actually a beta version, in which you can pass in your JSON
and the generator will give you back a draft-07 schema with validation and information data.

In further versions, there will be options to customise generation,... and more features.

For more information about JSON schemas, the official documentation is here <http://json-schema.org/> 

## Installation
```sh
npm install json-s-generator --save
```

## Usage
Import Generator class into your typescript project, create a new instance of it.

Call getSchema by passing in your JSON model to generate a schema based on it.
```typescript
import { Generator } from 'json-s-generator';

const myModel = {
    "name": "Alfred",
    "car": {
        "brand": "Toyoki",
        "color": "red",
        "version": 42,
        "isElectric": false
    },
    "children": ["John", "Kate"]
};
const generator = new Generator();
const mySchema = generator.getSchema(myModel);
```

The JSON above will produce following schema :
```json
{
  "$id": "http://example.com/example.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "definitions": {},
  "description": "root of schema",
  "properties": {
    "name": {
      "$id": "/properties/name",
      "type": "string",
      "title": "The name Schema ",
      "default": "",
      "examples": ["Alfred"]
    },
    "car": {
      "$id": "/properties/car",
      "type": "object",
      "properties": {
        "brand": {
          "$id": "/properties/car/properties/brand",
          "type": "string",
          "title": "The brand Schema ",
          "default": "",
          "examples": ["Toyoki"]
        },
        "color": {
          "$id": "/properties/car/properties/color",
          "type": "string",
          "title": "The color Schema ",
          "default": "",
          "examples": ["red"]
        },
        "version": {
          "$id": "/properties/car/properties/version",
          "type": "integer",
          "title": "The version Schema ",
          "default": 0,
          "examples": [42]
        },
        "isElectric": {
          "$id": "/properties/car/properties/isElectric",
          "type": "boolean",
          "title": "The isElectric Schema ",
          "default": false,
          "examples": [false]
        }
      },
      "required": [
        "brand",
        "color",
        "version",
        "isElectric"
      ]
    },
    "children": {
      "$id": "/properties/children",
      "type": "array",
      "uniqueItems": true,
      "items": {
        "$id": "/properties/children/items",
        "type": "string",
        "title": "The 0 Schema ",
        "default": "",
        "examples": [
          "John",
          "Kate"
        ]
      }
    }
  },
  "required": [
    "name",
    "car",
    "children"
  ]
}
```

## Test
Tests are written with Mocha and Chai. You can run them with the command.
```sh
npm run test
```


## License
```text
« Copyright © Daussin Alain <mowglilab@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the “Software”), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

The Software is provided “as is”, without warranty of any kind, express or implied, including but not
limited to the warranties of merchantability, fitness for a particular purpose and noninfringement.
In no event shall the authors or copyright holders be liable for any claim, damages or other liability,
whether in an action of contract, tort or otherwise, arising from, out of or in connection with the
software or the use or other dealings in the Software. »
```
