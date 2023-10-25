export default function Card() {
    return (
      <div className="w-[250px] rounded-md border-2 border-fuchsia-500 bg-black m-auto shadow-2xl shadow-fuchsia-500">
        <div className="border-b border-dotted border-fuchsia-500 p-4">
          <h2 className="text-2xl font-bold underline decoration-fuchsia-500 ">
            Card Title
          </h2>
        </div>
        <div className="p-4 text-sm">
          <h4 className="text-xl underline decoration-fuchsia-500">
            Card Sub-Title
          </h4>
          <p>Some Cool Stuff</p>
          <p>More Cool Stuff</p>
          <p>Coolest of all Stuff</p>
        </div>
      </div>
    );
  }
  