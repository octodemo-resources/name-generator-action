# name-generator-action

Have you ever wanted to generate a random name for a thing? With this action you can!

This action will combine a noun and an adjective to generate a name that is somewhat random within the confines of the lists of items that it can pull from.

With the action you can request the number of random names you want generated and the maximum length of those. Keep in mind though that some maximum lengths migh be impossible to generate due to the lengths of the words it pulls from.

## Inputs

* `max_length`: The maximum length of the names that you want. Defaults to `48`, and some shorter values typically less than `10` are almost impossible to be satisfied so will result in an error.

* `count`: The total number of names to generate

## Outputs

* `name`: The first random name that was generated

* `names`: A JSON encoded array of the total number of generated names as per the `count` setting, the first entry being that of the `name` output value

## Examples

Using it with defaults:
```
- name: Generate Names
  id: generate_names
  uses: octodemo-resources/name-generator-action@v1
```

Specify a max length and count:
```
- name: Generate Names
  id: generate_names
  uses: octodemo-resources/name-generator-action@v1
  with:
    max_length: 20
    count: 10
```

