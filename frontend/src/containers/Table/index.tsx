import TableGrid from "../../components/TableGrid";

export default function Table({ data }: any) {
  return (
    <div className="m-4">
      <div className="text-4xl font-semibold flex justify-center">
        User Database
      </div>
      <div className=" flex justify-center mt-4">
        <ul className="w-[350px]">
          <li className="mb-2">
            To edit the columns, double click each section to open the editor.
          </li>
          <li className="mb-2">
            To save changes simply press the save icon.{" "}
            <strong>
              Please click out of all textfields before pressing the save
              button.
            </strong>
          </li>
          <li className="mb-2">To delete an entry press the trash can icon.</li>
          <li className="mb-2">
            Click on the profile pictures to open up the user's page.
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        {data && data.length > 0 && (
          <div className="w-5/6">
            <TableGrid data={data} />
          </div>
        )}
      </div>
    </div>
  );
}
