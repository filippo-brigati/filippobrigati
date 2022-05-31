export default function Error500() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="font-regular text-sm text-gray-500">
          <span className="text-red-600">500</span> - Server
          Error :(
        </h1>
      </div>
    </>
  );
}
