# JSON S Generator

A generator of JSON schema.

Actually in a beta version, you can pass in your JSON and the generator will give you 
back a draft-7 schema with standard information.

In further versions, options to customise generation would be available to select
draft version and generated information... and more features.

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

