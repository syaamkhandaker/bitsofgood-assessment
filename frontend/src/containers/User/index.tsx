import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  data: any;
};

export default function UserContainer({ data }: Props) {
  let [searchParams] = useSearchParams();
  const id: any = searchParams.get("id");
  const user = data[id];
  const [count, setCount] = useState(0);
  useEffect(() => {
    const addVisits = () => {
      const visits = JSON.parse(localStorage.getItem("visits") || "");
      console.log(visits);
      if (!visits[id]) {
        visits[id] = 1;
      } else {
        visits[id] += 1;
      }

      localStorage.setItem("visits", JSON.stringify(visits));
      setCount(visits[id]);
    };
    addVisits();
  }, [id]);
  return (
    <div>
      <div className="flex justify-center mb-4">
        <img src={user.avatar} alt="" className="rounded-full w-60 h-60" />
      </div>
      <div className="flex justify-center text-center">
        <div className="text-3xl md:text-5xl font-semibold mb-4">
          {user.name}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="sm:w-7/12 md:w-5/12 border-[2px] p-6 border-gray-400 gap-y-5 flex flex-col items-between">
          <div className="flex items-center flex-col text-center md:justify-between md:flex-row">
            <div className="font-semibold">Phone</div>
            <div>{user.phone}</div>
          </div>
          <div className="flex items-center flex-col text-center md:justify-between md:flex-row">
            <div className="font-semibold">Email</div>
            <div>{user.email}</div>
          </div>
          <div className="flex items-center flex-col text-center md:justify-between md:flex-row">
            <div className="font-semibold">Hero Project</div>
            <div>{user.hero_project}</div>
          </div>
          <div className="flex items-center flex-col text-center md:justify-between md:flex-row">
            <div className="font-semibold">Rating</div>
            <div>{user.rating}</div>
          </div>
          <div className="flex items-center flex-col text-center md:justify-between md:flex-row">
            <div className="font-semibold">Status</div>
            <div>{`${user.status}`}</div>
          </div>
          <div className="flex items-center flex-col text-center md:justify-between md:flex-row">
            <div className="font-semibold">Notes</div>
            <div>{user.notes}</div>
          </div>
        </div>
      </div>
      <div className="text-sm text-neutral-500 font-semibold flex justify-center mt-5">
        Page visited: {count} times
      </div>
    </div>
  );
}
