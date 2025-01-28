import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Menu />
      <p className="m-auto text-2xl">hi, welcome to coffee diary</p>
    </div>
  );
}
