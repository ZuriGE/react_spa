import { priceFormat } from "../auxiliary"
import { Book } from "../types"

type BookItemProps={
    book:Book
}

export default function BookItem({book}:BookItemProps) {

    const bgImageStyle={
        backgroundImage: `url(${book.img})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'top center', 
        width: '100%',
    }

   

  return (

   
        <article className="group w-full aspect-[6/9]  overflow-hidden rounded-md flex items-end border "style={bgImageStyle}>     
            <div className=" bg-white w-full bg-opacity-40 h-1/4 py-4 px-4 backdrop-blur-sm border-t group-hover:h-full group-hover:bg-opacity-60 group-hover:pt-8 group-hover:backdrop-blur-md transition-all ">

                <div className="grid grid-cols-4">
                    <div className=" col-span-3 flex flex-col justify-start">
                    <h1 className=" text-gray-700 font-bold text-xl pr-2 leading-tight ">{book.title}</h1>
                    <h2 className="pr-2 text-lg font-semibold">{book.author}</h2>
                </div>

                <div className="flex items-start">
                    <p className=" font-black text-fuchsia-900 text-xl drop-shadow-md">{priceFormat(book.price)}</p>
                </div>
                </div>
           
                <div className="hidden  group-hover:block" >
                    <div className="col-span-4 py-3">
                        <p className=" line-clamp-4 ">{book.summary}</p>
                    </div>
                    <div className="col-span-4 ">
                        <p>ISBN: {book.isbn}</p>
                    </div>

                    <div className=" grid grid-cols-3 gap-2 py-3">
                            {book.tags.map((tag)=>(
                                <div className="m-0.5 h-6 rounded-xl bg-fuchsia-950 text-neutral-200">
                                    <p className=" text-center text-sm font-semibold leading-6">{tag}</p>
                                </div>
                            ))}
                    </div>
                </div>

                
                
            



            </div>
        
    </article>
    
  )
}
