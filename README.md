# JSON to Object javascript action

This action converts a JSON string into a Javascript Object

## Inputs

### `json-string`

**Required** The JSON string to parse.

## Outputs

### `object`

The Javascript object generated from parsing the input

## Example usage
```
uses: aabrego/json-to-object-action@master
with:
  json-string: '{ firstName: "John", lastName: "Doe" }'
```