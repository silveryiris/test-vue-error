export function errorPopup(err: Error, vm: Vue, info: string): void {
  console.log(`vm => ${vm}`)
  console.log(vm)
  console.log(`err => ${err}`)
  console.log(err)
  console.log(`info => ${info}`)
  console.log(info)

  alert(err)
}
