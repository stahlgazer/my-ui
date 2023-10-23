export default function Card() {
  return (
    <div className="w-[250px] rounded-md border-2 border-fuchsia-500 bg-black m-auto">
      <div className="border-b border-fuchsia-500 p-4">
        <h2 className="text-2xl font-bold underline decoration-fuchsia-500 ">
          Card Title
        </h2>
      </div>
      <div className="p-4 text-sm">
        <h4 className="text-base font-semibold underline decoration-fuchsia-500">Card Sub-Title</h4>
        <p>
          Some Cool Stuff
        </p>
        <p>
          More Cool Stuff
        </p>
        <p>
          Coolest of all Stuff
        </p>
      </div>
    </div>
  );
}
