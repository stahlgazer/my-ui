export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ml-[160px] md:ml-[190px] lg:ml-[320px] text-center mt-4 md:h-screen flex flex-col justify-center">
      {children}
    </div>
  );
}
