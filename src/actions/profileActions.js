export const CHANGE_INFO = '@@profile/CHANGE_INFO'

export const changeInfo = (name, age, site) =>({
  type:CHANGE_INFO,
  name,
  age,
  site,
})