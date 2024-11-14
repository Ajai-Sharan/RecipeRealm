import { Button } from "./button";

export function CardDemo({item}) {
  return (
    <div className=" z-0 mx-2 my-3 transition-transform duration-300 ease-in-out transform hover:scale-110">
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 border hover:border-primary p-1">
          <img src= {item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
          <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                  <p className="dark:text-gray-800">{item.title}</p>
              </div>
              <Button variant = {"cardBtn"}>Read More</Button>
          </div>
      </div>
    </div>
  )
}
