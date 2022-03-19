export default function Home() {
  return (
    <div className="w-full m-16">
      {/* <div className="p-6">
        <img
          className="rounded-full h-52 w-52 shadow-lg"
          src="/avatar.png"
          alt=""
        />
      </div>
      <div>
        <div className="p-6 font-sans font-bold text-4xl">@TenkeySeven</div>
        <div className="p-6 font-sans">
          Hi, I'm TenkeySeven. Now I am reconstructing my website.
        </div>
        <div className="pl-6 font-sans">
          Current Status: 🌱
        </div>
      </div> */}

      <div className="relative group">
        <div className="text-8xl tracking-widest font-thick">Tenkeyseven</div>

        <img className="absolute -top-80 right-40 -z-10" src="/images/blob.svg" />
        <div className="w-[34rem] h-6 bg-pink-600 absolute left-0 bottom-0 opacity-70 -z-10 transition-all duration-300 group-hover:w-[60rem]" />
      </div>

      <div className="mt-16 tracking-widest">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
    </div>
  )
}
