function sumar(a:number,b:number):number{
    return a+b
}
const suma:number=sumar(2,2)
const suma2:number=sumar(12,12)

console.log(suma2)
// node .\ ejecucion del js tsc .\compilacion tsc --w wacth mode

function mostrar(a:string):void{console.log(a)}
mostrar('yo')
const mostrar2=(a:string):void=>{console.log(a)}
mostrar2('tu')