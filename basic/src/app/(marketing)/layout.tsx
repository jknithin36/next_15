export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container mx-auto px-6 py-10">{children}</main>;
}
