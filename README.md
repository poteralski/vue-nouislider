angular-nouislider
==================

Simple angular directive for jquery [nouislider](http://refreshless.com/nouislider/) plugin.

### Usage:

- Install: `bower install vue-nouislider`
- Add `jquery`, `angular`, `nouislider` and `vue-nouislider` to your code:

```html
<link rel="stylesheet" href="bower_components/nouislider/jquery.nouislider.css" />
<script src="bower_components/jquery/jquery.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/nouislider/jquery.nouislider.js"></script>
<script src="bower_components/nouislider/Link.js"></script>
<script src="bower_components/vue-nouislider/src/nouislider.js"></script>
```


- Create your `<slider>`:

```html
<slider :slider-value.sync="menuItem.prepare_time" :slider-min="0" :slider-max="20" :slider-step="1"></slider>
```

That's it!
