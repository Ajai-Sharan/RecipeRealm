import { useRecoilValueLoadable } from "recoil";
import { itemsState } from "@/context/atom";
import { CardDemo } from "./cardDemo";
import { SkeletonComponent } from "./skeletonComponent";

export function CardComponent() {
  const items = useRecoilValueLoadable(itemsState);

  function handleLoading() {
    return (
      <div className="flex flex-wrap px-5 justify-evenly">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonComponent key={index} />
        ))}
      </div>
    );
  }

  if (items.state === "loading") {
    return handleLoading(); // Render the loading skeleton
  } else if (items.state === "hasError") {
    return <div className="text-red-500 text-center mt-5">Error loading items. Please try again.</div>;
  } else if (items.state === "hasValue") {
    return (
      <div className="flex flex-wrap px-5 justify-evenly">
        {items.contents.map((item) => (
          <CardDemo key={item.id} item={item} />
        ))}
      </div>
    );
  } else {
    return null; 
  }
}
