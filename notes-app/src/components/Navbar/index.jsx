import logo from "../../assets/logo.png";

export const Navbar = () => (
  <header className="flex p-5">
    <div className="w-14 h-14">
      <img className="w-full h-full" src={logo} alt="logo" />
    </div>
    <h1 className=" text-4xl">NoteDown</h1>
  </header>
);