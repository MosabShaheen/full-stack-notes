import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Notes from "@/sections/notes";

export default function DashboardPage() {
  return (
    <div>
      <div className="bg-[#1c1917]">
        <Header />
        {/* @ts-expect-error Server Component */}
        <Notes />
      </div>
      <Footer />
    </div>
  );
}