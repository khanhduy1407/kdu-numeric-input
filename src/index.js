import KduNumericInput from './kdu-numeric-input.kdu'

const plugin = {
  install (Kdu, options) {
    Kdu.component(KduNumericInput.name, KduNumericInput)
  }
}
KduNumericInput.install = plugin.install

export default KduNumericInput
