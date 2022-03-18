export default function Error500() {
    return (
        <>
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="font-regular text-sm text-gray-500 dark:text-slate-300">
            <span className="text-red-600 dark:text-red-400">500</span> - Server Error :(
          </h1>
        </div>
      </>
    )
}