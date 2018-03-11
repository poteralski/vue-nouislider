/**
 * Komponent Vue.js dla http://refreshless.com/nouislider/
 * Zapewnia Two Way Data Binding
 * Przykladowe uzycie:
 * http://jsfiddle.net/5sH6A/
 * <slider :slider-value.sync="menuItem.prepare_time" :slider-min="0" :slider-max="20" :slider-step="1"></slider>
 * Created by codeninja on 05.05.16.
 */
Vue.component('slider', {
    props: ['sliderValue', 'sliderMin', 'sliderMax', 'sliderStep'],
    template: '<div :id="sliderId"></div>',
    data: function () {
        return {
            sliderId: this.uuid4(),
        }
    },
    mounted: function () {
        var slider = document.getElementById(this.sliderId)
        noUiSlider.create(slider, {
            start: this.sliderValue,
            step: this.sliderStep,
            range: {
                'min': [this.sliderMin],
                'max': [this.sliderMax]
            },
            pips: {
                mode: 'values',
                values: [5, 10, 15],
                density: 5
            },
            format: {
                to: function (value) {
                    return value
                },
                from: function (value) {
                    return value
                }
            }
        })
        slider.noUiSlider.on('update', this.updateValue);
    },
    methods: {
        updateValue: function (value) {
            this.sliderValue = value[0]
        },
        uuid4: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
                return v.toString(16)
            })
        },
    }
})
