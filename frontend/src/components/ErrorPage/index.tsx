/**
 * Page in case any errors occur in code
 * @returns Error Page
 */
export default function ErrorPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-3xl font-semibold">
        Theres been an error! Please retry your request at a later time.
      </div>
    </div>
  );
}
