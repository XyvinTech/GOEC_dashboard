import { isLogin } from "../../services/authRelated"

export function userCan(permission) {
  if (!isLogin()) return false

  let userPermissions = ['adminView', 'adminEdit']
  return userPermissions.includes(permission)
}

