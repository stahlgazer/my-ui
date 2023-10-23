export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-xs md:text-base ml-[160px] md:ml-[190px] lg:ml-[320px] text-center mt-4 md:mt-0 md:h-screen flex flex-col justify-center">
      {children}
    </div>
  );
}
