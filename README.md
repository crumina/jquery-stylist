# jQuery Stylist

A jQuery plugin (**0.9kb**) for creating and applying CSS stylesheets on the fly—useful for sites with user-generated themes. This plugin works for all major browsers: IE, Firefox, Webkit (Chrome, Safari, etc) and Opera.

## Usage

```javascript
$.stylist({
	'a': { color: '#b2c8de' },
	'a:hover': { color: '#dceeff' },
	'a:active': { color: '#fbfdff' }
});
```

To clear the styles you have applied, it's simple:

```javascript
$.stylist('reset');
```

### Defining Properties Multiple Times

Sometimes it's necessary to have the same property defined multiple times for a rule—a great example being CSS3 background gradients. For that, the syntax is:

```javascript
$.stylist({
	'.btn': {
		'background-image': [
			'-moz-linear-gradient(top,#ffffff,#f2f2f2)',
			'-ms-linear-gradient(top,#ffffff,#f2f2f2)',
			'-webkit-gradient(linear,0 0,0 100%,from(#ffffff),to(#f2f2f2))',
			'-webkit-linear-gradient(top,#ffffff,#f2f2f2)',
			'-o-linear-gradient(top,#ffffff,#f2f2f2)',
			'linear-gradient(top,#ffffff,#f2f2f2)'
		]
	}
})
```

## License

Copyright (c) 2010 DIY Co

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.