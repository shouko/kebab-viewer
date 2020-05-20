const keys = ['username', 'token', 'userAgent', 'apiVersion', 'apiUrl']

export const state = () => {
  let persisted
  try {
    persisted = JSON.parse(window.localStorage.getItem('settings')) || {}
  } catch (e) {}
  return Object.fromEntries(keys.map((k) => {
    return [k, persisted[k] || '']
  }))
}

export const mutations = {
  set (state, payload) {
    window.localStorage.setItem('settings', JSON.stringify(
      Object.fromEntries(keys.map((k) => {
        state[k] = payload[k] || ''
        return [k, payload[k]]
      }))
    ))
  }
}

export const getters = {

}
