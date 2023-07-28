import { useState } from "react";
import { ViewData } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  viewData: ViewData[][];
};

export default function ChosenCourses({ viewData }: Props) {
  const [savedSchedule, setSavedSchedule] = useState([])

  function handleSaved(viewData: ViewData[][]){
    
  }

  return (
    <section className="row-span-1 col-span-full bg-c1 rounded-lg  p-4 box-border flex">
      {savedSchedule.map(i => {
        return <div></div>
      })}
      <div className="h-full bg-c2 hover:bg-c3 active:bg-c4 transition rounded-lg flex items-center justify-center p-4" onClick={() => handleSaved(viewData)}>
        <FontAwesomeIcon icon={faPlusCircle} className="text-4xl"/>
      </div>
    </section>
  );
}
