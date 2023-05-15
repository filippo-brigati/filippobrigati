export default function Footer() {
  const year = new Date().getUTCFullYear().toString();

  return (
    <>
      <div className="w-full mt-28 flex justify-end items-center">
        <p className="text-xs">CC BY NC 4.0 {year} - Filippo Brigati</p>
      </div>
    </>
  );
}