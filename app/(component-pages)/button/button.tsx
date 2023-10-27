export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="transition ease-in-out border-2 bg-black border-fuchsia-500 rounded-md p-2 hover:text-fuchsia-500 hover:ease-linear"
    >
      {children}
    </button>
  );
}
