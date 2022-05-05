let regExp = /^[A-Z]+$/i

export function validateInput(value:string){
  return regExp.test(value);
}