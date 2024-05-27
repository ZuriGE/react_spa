import BookItem from "../components/BookItem"
import { db } from "../data/book_db"

export default function BookList() {
  return (
    <main className="flex-grow w-full">

      <section className="grid gap-12 p-16 grid-cols-1 sm:px-28 lg:grid-cols-2  xl:grid-cols-3  lg:gap-32 ">
         {db.map((book)=>(

          <BookItem 
            key={book.id}
            book={book}  
          ></BookItem>
          
        )

        )}
      </section>
       
    </main>
  )
}