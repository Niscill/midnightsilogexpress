import React from 'react'

const Sec4 = () => {
  return (
    <div className="bg-black min-h-screen p-8 text-white font-sans">
      <div className="text-center mb-12">
        <h1 className="text-7xl font-bold text-pink-400 mb-2 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]">
          Midnight Special Menu
        </h1>
        <p className="text-lg text-cyan-400">
          Choose from our bestselling midnight special menu, served hot and ready with rice and egg.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
        <div className="space-y-2">
          <div className="flex items-center gap-4 p-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800">
              <img src="/plate1.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold">Bagsilog</h3>
              <p className="text-xs text-gray-400">Bagnet · Egg · Rice</p>
            </div>
            <div className="font-bold text-lg text-cyan-300">₱115</div>
          </div>
          <div className="h-[1px] w-full bg-cyan-400" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-4 p-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800">
              <img src="/plate2.png" alt="Tapsilog" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold">Tapsilog</h3>
              <p className="text-xs text-gray-400">Beef Tapa · Egg · Rice</p>
            </div>
            <div className="font-bold text-lg text-cyan-300">₱120</div>
          </div>
          <div className="h-[1px] w-full bg-cyan-400" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-4 p-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800">
              <img src="/plate3.png" alt="Longsilog" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold">Longsilog</h3>
              <p className="text-xs text-gray-400">Longganisa · Egg · Rice</p>
            </div>
            <div className="font-bold text-lg text-cyan-300">₱105</div>
          </div>
          <div className="h-[1px] w-full bg-cyan-400" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-4 p-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800">
              <img src="/plate4.png" alt="Hotsilog" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold">Hotsilog</h3>
              <p className="text-xs text-gray-400">Hotdog · Egg · Rice</p>
            </div>
            <div className="font-bold text-lg text-cyan-300">₱95</div>
          </div>
          <div className="h-[1px] w-full bg-cyan-400" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-4 p-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800">
              <img src="/plate1.png" alt="Spamsilog" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold">Spamsilog</h3>
              <p className="text-xs text-gray-400">Spam · Egg · Rice</p>
            </div>
            <div className="font-bold text-lg text-cyan-300">₱110</div>
          </div>
          <div className="h-[1px] w-full bg-cyan-400" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-4 p-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800">
              <img src="/plate2.png" alt="Tosilog" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold">Tosilog</h3>
              <p className="text-xs text-gray-400">Tocino · Egg · Rice</p>
            </div>
            <div className="font-bold text-lg text-cyan-300">₱128</div>
          </div>
          <div className="h-[1px] w-full bg-cyan-400" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-4 p-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800">
              <img src="/plate3.png" alt="Adosilog" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold">Adosilog</h3>
              <p className="text-xs text-gray-400">Adobo · Egg · Rice</p>
            </div>
            <div className="font-bold text-lg text-cyan-300">₱115</div>
          </div>
          <div className="h-[1px] w-full bg-cyan-400" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-4 p-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800">
              <img src="/plate4.png" alt="Sisigsilog" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold">Sisigsilog</h3>
              <p className="text-xs text-gray-400">Sisig · Egg · Rice</p>
            </div>
            <div className="font-bold text-lg text-cyan-300">₱135</div>
          </div>
          <div className="h-[1px] w-full bg-cyan-400" />
        </div>
      </div>

      

      <div className="flex justify-between items-center max-w-5xl mx-auto mt-10 px-4">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-lg">Extra Rice</h3>
          <span className="text-lg text-cyan-300 font-bold">₱20</span>
        </div>
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-lg">Softdrinks</h3>
          <span className="text-lg text-cyan-300 font-bold">₱20</span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-cyan-400 mt-8" />
    </div>
  )
}

export default Sec4
