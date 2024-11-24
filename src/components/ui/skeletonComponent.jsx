import { Skeleton } from "./skeleton";


export function SkeletonComponent(){

    return (
        <div className="mx-2 my-3">
            <div className="w-80 h-100 rounded-md shadow-md border p-1">
                <Skeleton className="h-72 w-full rounded-xl" />
                <div className="flex flex-col justify-between space-y-8">
                    <div className="space-y-2 pt-6">
                    <Skeleton className= "h-10 w-full" />
                    </div>
                    <div className="px-6 pb-1">
                    <Skeleton className="h-9 w-full" />
                    </div>
                </div>
            </div>
        </div>   

    )

}