import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

type Props = {
  user?: User;
  setNavDisplayName: React.Dispatch<React.SetStateAction<string>>;
};

export default function DisplayName({ user, setNavDisplayName }: Props) {
  const [edit, setEdit] = useState(false);

  const [displayName, setDisplayName] = useState<string>(
    user?.displayName ?? user?.email ?? "User"
  );
  const [oldDisplayName, setOldDisplayName] = useState("");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName ?? user.email ?? "User");
    }
  }, [user]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEdit(false);
    setNavDisplayName(displayName);

    if (!user) return;

    updateProfile(user, {
      displayName: displayName,
    }).catch((err) => console.log(err));
  }

  function handleClickEdit(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.stopPropagation();

    if (!edit) {
      setOldDisplayName(displayName);
    } else setDisplayName(oldDisplayName);

    setEdit((edit) => !edit);
  }

  return (
    <div className="rounded-xl border border-c9 border-solid p-4 transition hover:bg-c8 hover:text-c2">
      <h2 className="font-semibold md:text-xl text-base">Display Name</h2>
      <p>This name will be displayed instead of your email at the top</p>

      <div className="mt-4 flex items-center">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="md:pr-2 pr-1 hover:text-c5 transition cursor-pointer"
          onClick={handleClickEdit}
        />
        {!edit ? (
          displayName
        ) : (
          <form className="w-full" onSubmit={(e) => void handleSubmit(e)}>
            <input
              className="outline-none rounded md:p-2 p-1 w-full text-c9"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input type="submit" className="hidden" />
          </form>
        )}
      </div>
    </div>
  );
}
