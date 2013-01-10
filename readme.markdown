# gray-code

`n`-ary gray codes of radix `k`

[![browser support](http://ci.testling.com/substack/gray-code.png)](http://ci.testling.com/substack/gray-code)

[![build status](https://secure.travis-ci.org/substack/gray-code.png)](http://travis-ci.org/substack/gray-code)

# example

```
$ node
> var gray = require('gray-code')
```

```
> gray(2)
[ [ 0, 0 ],
  [ 0, 1 ],
  [ 1, 1 ],
  [ 1, 0 ] ]
```

```
> gray(3)
[ [ 0, 0, 0 ],
  [ 0, 0, 1 ],
  [ 0, 1, 1 ],
  [ 0, 1, 0 ],
  [ 1, 1, 0 ],
  [ 1, 1, 1 ],
  [ 1, 0, 1 ],
  [ 1, 0, 0 ] ]
```

```
> gray(2, 3)
[ [ 0, 0 ],
  [ 0, 1 ],
  [ 0, 2 ],
  [ 1, 2 ],
  [ 1, 0 ],
  [ 1, 1 ],
  [ 2, 1 ],
  [ 2, 2 ],
  [ 2, 0 ] ]
```

```
> gray(3, 3)
[ [ 0, 0, 0 ],
  [ 0, 0, 1 ],
  [ 0, 0, 2 ],
  [ 0, 1, 2 ],
  [ 0, 1, 0 ],
  [ 0, 1, 1 ],
  [ 0, 2, 1 ],
  [ 0, 2, 2 ],
  [ 0, 2, 0 ],
  [ 1, 2, 0 ],
  [ 1, 2, 1 ],
  [ 1, 2, 2 ],
  [ 1, 0, 2 ],
  [ 1, 0, 0 ],
  [ 1, 0, 1 ],
  [ 1, 1, 1 ],
  [ 1, 1, 2 ],
  [ 1, 1, 0 ],
  [ 2, 1, 0 ],
  [ 2, 1, 1 ],
  [ 2, 1, 2 ],
  [ 2, 2, 2 ],
  [ 2, 2, 0 ],
  [ 2, 2, 1 ],
  [ 2, 0, 1 ],
  [ 2, 0, 2 ],
  [ 2, 0, 0 ] ]
```

# methods

``` js
var gray = require('gray-code')
```

## gray(n, k=2)

Return the
[n-ary gray code](https://en.wikipedia.org/wiki/Gray_code#n-ary_Gray_code)
for `n` digits in radix `k`.

The default radix is binary `(k = 2)`.

# install

With [npm](https://npmjs.org) do:

```
npm install gray-code
```

# license

MIT
