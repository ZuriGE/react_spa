import { priceFormat } from "../auxiliary"
import { Book } from "../types"
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

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

    const editBook = ()=>{
        console.log('editar libro')
    }
    const deleteBook = ()=>{
        console.log('eliminar libro')
    }

   

  return (

   
        <article className="group w-full aspect-[6/9]  overflow-hidden rounded-md flex items-end border border-neutral-200 shadow-md "style={bgImageStyle}>     
            <div className=" bg-white w-full bg-opacity-40 h-1/4 py-4 px-4 backdrop-blur-sm border-t border-t-neutral-200 group-hover:h-full group-hover:bg-opacity-60 group-hover:pt-8 group-hover:backdrop-blur-md transition-all flex flex-col justify-center group-hover:justify-center">

                <div className="grid grid-cols-4">
                    <div className=" col-span-3 flex flex-col justify-start">
                    <h1 className=" text-gray-700 font-bold text-xl pr-2 leading-tight ">{book.title}</h1>
                    <h2 className="pr-2 text-lg font-semibold">{book.author}</h2>
                </div>

                <div className="flex items-start">
                    <p className=" font-black text-fuchsia-900 text-xl drop-shadow-md">{priceFormat(book.price)}</p>
                </div>
                </div>
                <div className="hidden  group-hover:flex flex-col " >
                {/* El contenido de este div solo se muestra al hacer hover en la card */}
                    <div className="col-span-4 py-3">
                        <p className=" line-clamp-4 ">{book.summary}</p>
                    </div>
                    <div className="col-span-4 ">
                        <p className=" text-xs font-semibold">ISBN: {book.isbn}</p>
                    </div>

                    <div className=" grid grid-cols-3 gap-2 pt-3 pb-6 border-b border-neutral-400 ">
                            {book.tags.map((tag)=>(
                                <div className="m-0.5 h-6 rounded-xl bg-fuchsia-950 text-neutral-200" key={tag}>
                                    <p className=" text-center text-sm font-semibold leading-6">{tag}</p>
                                </div>
                            ))}
                    </div>

                    
                        <button className="mt-6  w-full p-2 h-8 rounded-md flex justify-center items-center text-white hover:opacity-70 bg-neutral-800 active:scale-95" onClick={editBook}>
                                <FaPencil/>
                                <span className=" pl-4 font-semibold">Editar libro</span>
                            </button>
                            <button className="mt-3  w-full p-2 h-8 rounded-md flex justify-center items-center text-white hover:opacity-70 bg-red-600 active:scale-95" onClick={deleteBook} >
                                <FaRegTrashAlt/>
                                <span className=" pl-4 font-semibold">Borrar libro</span>
                            </button>
                 
                    
                        
                       
                           
                {/* El contenido de este div solo se muestra al hacer hover en la card */}   
                </div>

                
                
            



            </div>
        
    </article>
    
  )
}
