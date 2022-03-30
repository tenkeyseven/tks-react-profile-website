export default function Footer() {
  return (
    <footer className="p-16 bg-gradient-primary-bottom flex justify-between flex-col">
      <div>12</div>
      <div className="mx-48 my-8 h-[1px] bg-slate-500/50"></div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <span className=" flex flex-col text-sm text-slate-500 mr-1 justify-center">
            Building with
          </span>
          <a href="https://reactjs.org">
            <img className="w-6" src="public/images/logoReact.svg" />
          </a>
          <a href="https://www.typescriptlang.org">
            <img className="w-6" src="public/images/logoTypeScript.svg" />
          </a>
        </div>
        <div className="text-sm text-slate-500">
          Maintained by @TenkeySeven 2022
        </div>
      </div>
    </footer>
    // <footer className="px-16 py-4 bg-gray-50 text-gray-600 text-sm">
    //   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    // </footer>
  );
}
