import Image from "next/image";



export function Header() {
  return (
    <header className="relative bg-slate-300 h-96 text-white">
      <Image
        alt="Background"
        src={"/bgfishing.png"}
        quality={100}
        layout="fill"
        objectFit="cover"
        className="z-1"
      />
      <div className="relative z-10 flex bg-slate-800/20 items-center justify-between p-2">
        <div className="bg-white/20">Logo App</div>
        <div className="bg-white/20">Entrar</div>
      </div>
      <div className="relative z-10 flex bg-white/30 h-20 justify-center items-center">
        <h1>Barra</h1>
      </div>

    </header>
  );
}