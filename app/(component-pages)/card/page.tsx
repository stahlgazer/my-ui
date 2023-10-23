export default function Card() {
  return (
    <div className="w-[250px] rounded-sm border border-white bg-fuchsia-500 font-bold m-auto">
      <div className="border-b-2 border-white p-4">
        <h2 className="text-lg">Title</h2>
      </div>
      <div className="p-4 text-sm">
        <h4>Sub-Heading</h4>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
      </div>
    </div>
  );
}
