// import "./style.css";

import "./tailwind.css";

import logoUrl from "../assets/logo.svg";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    // <div className={"flex max-w-5xl m-auto"}>
    //   <Sidebar>
    //     <Logo />
    //     <Link href="/">Welcome</Link>
    //     <Link href="/todo">Todo</Link>
    //     <Link href="/star-wars">Data Fetching</Link>
    //     {""}
    //   </Sidebar>
    //   <Content>{children}</Content>
    // </div>
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-foreground">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div id="sidebar" className={"p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200"}>
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div id="page-content" className={"p-5 pb-12 min-h-screen"}>
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className={"p-5 mb-2"}>
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
