import { useSearchParams } from "react-router-dom";

export default function UserContainer({ data }: any) {
  let [searchParams] = useSearchParams();
  const id: any = searchParams.get("id");
  const user = data[id];
  return (
    <div>
      <div className="flex justify-center mb-4">
        <img src={user.avatar} alt="" className="rounded-full w-60 h-60" />
      </div>
      <div className="flex justify-center">
        <div className="text-5xl font-semibold mb-4">{user.name}</div>
      </div>
      <div className="flex justify-center">
        <div className="w-5/12 border-[2px] p-6 border-gray-400 gap-y-5 flex flex-col items-between">
          <div className="flex justify-between">
            <div>Phone</div>
            <div>{user.phone}</div>
          </div>
          <div className="flex justify-between">
            <div>Email</div>
            <div>{user.email}</div>
          </div>
          <div className="flex justify-between">
            <div>Hero Project</div>
            <div>{user.hero_project}</div>
          </div>
          <div className="flex justify-between">
            <div>Rating</div>
            <div>{user.rating}</div>
          </div>
          <div className="flex justify-between">
            <div>Status</div>
            <div>{`${user.status}`}</div>
          </div>
          <div className="flex justify-between">
            <div>Notes</div>
            <div>{user.notes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
