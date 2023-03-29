import Logo from "@/assets/Logo.svg";

export default function Header() {
  return (
    <header className=" h-[55px] px-5 py-4 bg-[#272E71]">
      <div className="max-w-[1440px] mx-auto">
        <img src={Logo} alt="logo" className="w-[140px] h-[26px]" />{" "}
      </div>
    </header>
  );
}
