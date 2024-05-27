export type NavItem = {
    id:number,
    name:string,
    link:string,
    public:boolean
}
export type Book = {
    id: number,
    title: string,
    type: string,
    author: string,
    price: number,
    img: string,
    summary: string,
    isbn: number,
    year: number,
    pages:number,
    tags?: string[],
}