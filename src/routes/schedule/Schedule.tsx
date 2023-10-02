import { View } from "./components";
import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Class, Saved, ViewData } from "../../types";
import { Search } from "./components/Search";
import { checkForOverlap, handleSetViewData } from "./functions";

import { $signOut, listenForChange } from "../../backend/api";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../userContext";
import { Globals } from "@react-spring/shared";

export const ClassContext = createContext<{
  chosenClasses: Class[];
  setChosenClasses: Dispatch<React.SetStateAction<Class[]>>;
}>({
  chosenClasses: [],
  setChosenClasses: () => { },
});

type Props = {
  login?: boolean;
};
export default function Schedule({ login }: Props) {
  Globals.assign({ frameLoop: "always" });

  const navigate = useNavigate();

  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(false);
  const [chosenClasses, setChosenClasses] = useState<Class[]>([]);
  const [userData, setUserData] = useState<{
    uid: string;
    schedules: Saved[];
  } | null>(null);

  const viewData = useMemo<ViewData[][]>(
    () => handleSetViewData(chosenClasses),
    [chosenClasses]
  );

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (checkForOverlap(viewData)) {
      setChosenClasses(chosenClasses.slice(0, -1));
      alert("The chosen class overlaps with another!");
    }
  }, [viewData]);

  useEffect(() => {
    // check if user is signed in
    if (login) {
      if (!user) {
        navigate("/");
      } else {
        listenForChange(
          user.uid,
          (snapshot) => {
            setUserData({
              uid: user.uid,
              schedules: snapshot.val() as Saved[],
            });
          },
          "schedules"
        );
      }
    }

    async function getData<T>(
      url: string,
      set: Dispatch<React.SetStateAction<T>>
    ) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = (await response.json()) as T;
        set(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData<Class[]>("/me-schedule-maker/data/all.json", setClasses).catch(
      (err) => console.log(err)
    );
  }, [user, login]);

  async function handleOnClick() {
    await $signOut();
  }

  return (
    <ClassContext.Provider value={{ chosenClasses, setChosenClasses }}>
      <nav className="md:text-base text-xs w-full bg-c9 text-c1 shrink-0 flex justify-between items-center">
        <FontAwesomeIcon
          icon={faHome}
          className="ml-2 cursor-pointer transition hover:text-c4"
          onClick={() => navigate("/")}
        />
        <p>
          Fall 2023 JAC{" "}
          <span className=" max-md:hidden">Mock Schedule Maker</span>
        </p>
        <p
          onClick={() => void handleOnClick()}
          className="mr-2 cursor-pointer transition hover:text-c4"
        >
          {userData ? "Sign Out" : ""}
        </p>
      </nav>
      <section className="w-full basis-full bg-c9 md:grid md:grid-cols-12 md:grid-rows-6 box-border gap-2 px-2 pb-2 text-c9 flex flex-col md:text-base text-xs overflow-auto">
        <Search
          classes={classes}
          setLoading={setLoading}
          viewData={viewData}
          userData={userData}
        />
        {loading && classes.length !== 0 && (
          <>
            <View viewData={viewData} />
          </>
        )}
      </section>
    </ClassContext.Provider>
  );
}
