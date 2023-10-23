export default function Card() {
  return (
    <div className="w-[250px] rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="border-b-2 border-black p-4">
        <h2 className="text-lg">Title</h2>
      </div>
      <div className="p-4">
        <p>Paragraph</p>
        <p>Paragraph</p>
        <p>Paragraph</p>
      </div>
    </div>
  );
}
