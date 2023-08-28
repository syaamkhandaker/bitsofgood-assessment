import Nav from "../Nav";

export default function Home() {
  return (
    <div className="h-screen">
      <Nav />
      <div className="h-[90%] flex flex-col justify-center items-center">
        <div className="mb-2 font-semibold text-5xl">Hello!</div>
        <div className="w-96 text-center">
          To navigate to the table section, please click on the Table section
          within the Navbar
        </div>
      </div>
    </div>
  );
}
