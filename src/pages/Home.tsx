export default function Home() {
  return (
    <div className="flex p-10 shadow-xl rounded-lg">
      <div className="p-6 ">
        {/* catcat head */}
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
      </div>
    </div>
  );
}
