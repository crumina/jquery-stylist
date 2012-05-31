# jQuery Stylist

A jQuery plugin (**0.9kb**) for creating and applying CSS stylesheets on the fly. This plugin works for all major browsers: IE, Firefox, Webkit (Chrome, Safari, etc) and Opera.

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