import Kdu from 'kdu'
import App from './App'

Kdu.config.productionTip = false

/* eslint-disable no-new */
new Kdu({
  el: '#app',
  components: { App },
  template: '<App/>'
})
