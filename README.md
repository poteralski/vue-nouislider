vue-nouislider
==============

Simple Vue.js component for jquery [nouislider](http://refreshless.com/nouislider/) plugin.

### Usage:

- Install: `bower install vue-nouislider`
- Add `jquery`, `vue`, `nouislider` and `vue-nouislider` to your code:

```html
<link rel="stylesheet" href="bower_components/nouislider/jquery.nouislider.css" />
<script src="bower_components/jquery/jquery.js"></script>
<script src="bower_components/vue/vue.js"></script>
<script src="bower_components/nouislider/jquery.nouislider.js"></script>
<script src="bower_components/vue-nouislider/src/nouislider.vue.js"></script>
```


- Create your `<slider>`:

```html
<slider :slider-value.sync="myValue" :slider-min="0" :slider-max="20" :slider-step="1"></slider>
```

That's it!
