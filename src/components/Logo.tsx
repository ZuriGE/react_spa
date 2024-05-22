export default function Logo() {
  return (
    <div className=" h-full  py-3 flex">
      <img src="/bookstore_logo.png" alt="bookstore logo" className="h-full"/>
      <h1 className=" text-neutral-300 abril text-3xl hidden md:block mx-5">BookStore</h1>
    </div>
  )
}
