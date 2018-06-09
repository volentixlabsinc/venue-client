export const state = () => ({
  copiedSignatureId: undefined
})

export const mutations = {
  signatureCopied (state, signatureId) {
    state.copiedSignatureId = signatureId
  },
};