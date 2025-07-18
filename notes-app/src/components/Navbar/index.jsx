import logo from "../../assets/logo.png";

export const Navbar = () => (
  <header className="flex px-3 py-2 gap-3 border-b-2  border-amber-700">
    <div className="w-12 h-12">
      <img className="w-full h-full" src={logo} alt="logo" />
    </div>
    <h1 className=" text-amber-800 text-4xl italic font-semibold">NoteDown</h1>
  </header>
);