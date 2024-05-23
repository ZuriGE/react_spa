export function priceFormat(quantity : number):string{
    return new Intl.NumberFormat('es-ES', {
        style:'currency', currency:'EUR'
    }).format(quantity)
}