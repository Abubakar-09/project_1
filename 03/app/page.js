import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-[80vw] m-auto h-screen flex max-md:w-[95vw]">
        {/* first section  */}
        <div className="text-white overflow-y-scroll overflow-x-hidden border-r max-md:w-[20%] border-r-stone-700 flex  pt-5 flex-col w-[25%] justify-between pb-12 h-full overflow-hidden">
          <div className="w-full max-md:flex max-md:justify-center">
            <div className="w-[3vw] max-md:w-[12vw] max-md:h-[12vw] h-[3vw] relative">
              <Image src='/icon.svg' fill={true} alt="logo" />
            </div>
          </div>
          <div className="h-[75%] ">
            <ul className="h-full flex flex-col justify-between">
              <li className="flex gap-2 items-center max-md:w-full max-md:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                <span className="max-md:hidden">Home</span>
              </li>
              <li className="flex gap-2 items-center max-md:w-full max-md:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                <span className="max-md:hidden">Explore</span>
              </li>
              <li className="flex gap-2 items-center max-md:w-full max-md:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
                <span className="max-md:hidden">Notication</span>
              </li>
              <li className="flex gap-2 items-center max-md:w-full max-md:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><path d="M3 12h.01" /><path d="M3 18h.01" /><path d="M3 6h.01" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M8 6h13" /></svg>
                <span className="max-md:hidden">Lists</span>
              </li>
              <li className="flex gap-2 items-center max-md:w-full max-md:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
                <span className="max-md:hidden">Bookmark</span>
              </li>
              <li className="flex gap-2 items-center max-md:w-full max-md:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487" /><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /><circle cx="10" cy="8" r="5" /></svg>
                <span className="max-md:hidden">Profile</span>
              </li>
              <li className="flex gap-2 items-center max-md:w-full max-md:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-text"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M13 8H7" /><path d="M17 12H7" /></svg>
                <span className="max-md:hidden">Grok</span>
              </li>
              <li className="flex gap-2 items-center max-md:w-full max-md:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                <span className="max-md:hidden">More</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-between md:pr-4 max-md:justify-center items-center">
            <div className="new w-[4vw] max-md:w-[15vw] relative h-[7vh] rounded-full">
              <Image src={'/img.jpeg'} className="rounded-full object-cover" fill={true} />
            </div>
            <div className="new flex max-md:hidden flex-col gap-[1px]">
              <p className="d text-base font-extrabold">DemoName</p>
              <p className="d text-sm">@username</p>
            </div>
            <div className="max-md:hidden">...</div>
          </div>
        </div>
        {/* second section  */}
        <div className="max-md:w-[80%] text-white w-[50%] pt-5 border-r border-r-slate-500 h-full overflow-x-hidden overflow-y-scroll">
          <div className="1 h-[5vh] border-b border-b-stone-700 flex items-center">
            <div className="w-[45%] flex justify-center flex-col items-center text-white font-bold">For You
              <div className="w-[20%] bg-blue-800 h-[2px]"></div>
            </div>
            <div className="w-[45%] flex justify-center text-white font-bold">Follwing</div>
            <div className="w-[10%] flex justify-center text-white font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
            </div>
          </div>
          <div className="profile_comment py-4 border-b border-b-stone-700 flex p-2">
            <div className="d w-[20%]">
              <div className="new w-[4vw] max-md:w-[15vw] relative h-[7vh] rounded-full">
                <Image src={'/img.jpeg'} className="rounded-full object-cover" fill={true} />
              </div>
            </div>
            <div className="d w-[80%] max-md:p-2 flex flex-col gap-3">
              <div className="h text-stone-700">What's Happening?!</div>
              <div className="h text-sm text-blue-500 max-md:text-[10px] flex gap-2 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
                EveryOne Can Reply
              </div>
              <div className="w-full bg-stone-700 h-[1px]"></div>
              <div className="h flex justify-between items-center">
                <div className="icons text-blue-500 flex gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" /></svg>
                </div>
                <button className="p-2 bg-blue-500 text-white font-bold text-sm rounded-full px-4">POST</button>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="profile_comment md:py-5 border-b border-b-stone-700 flex p-2">
            <div className="d w-[20%]">
              <div className="new w-[4vw] max-md:w-[15vw] relative h-[7vh] rounded-lg">
                <Image src={'/img.jpeg'} className="rounded-lg object-cover" fill={true} />
              </div>
            </div>
            <div className="d w-[80%] max-md:p-2 flex flex-col gap-3">
              <div className="h flex md:gap-3 gap-[3px] max-md:text-[9px] text-sm items-center">
                <span className="font-bold text-sm max-md:text-[10px] text-white">Elon Musk</span>
                <span>@elonmusk</span>
                <span>6h</span>
              </div>
              <div className="h text-sm max-md:text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, inventore hic laborum vitae fugiat sed reprehenderit ea mollitia quo facilis, non quisquam atque expedita aperiam corporis animi, illo ab nesciunt.</div>
              <div className="h flex justify-between text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-reply"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="profile_comment border-b md:py-5 border-b-stone-700 flex p-2">
            <div className="d w-[20%]">
              <div className="new w-[4vw] max-md:w-[15vw] relative h-[7vh] rounded-lg">
                <Image src={'/img.jpeg'} className="rounded-lg object-cover" fill={true} />
              </div>
            </div>
            <div className="d w-[80%] max-md:p-2 flex flex-col gap-3">
              <div className="h flex md:gap-3 gap-[3px] max-md:text-[9px] text-sm items-center">
                <span className="font-bold text-sm max-md:text-[10px] text-white">Elon Musk</span>
                <span>@elonmusk</span>
                <span>6h</span>
              </div>
              <div className="h text-sm max-md:text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, inventore hic laborum vitae fugiat sed reprehenderit ea mollitia quo facilis, non quisquam atque expedita aperiam corporis animi, illo ab nesciunt.</div>
              <div className="h flex justify-between text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-reply"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
              </div>
            </div>
          </div>
          {/* fourt  */}
          <div className="profile_comment border-b md:py-5 border-b-stone-700 flex p-2">
            <div className="d w-[20%]">
              <div className="new w-[4vw] max-md:w-[15vw] relative h-[7vh] rounded-lg">
                <Image src={'/img.jpeg'} className="rounded-lg object-cover" fill={true} />
              </div>
            </div>
            <div className="d w-[80%] max-md:p-2 flex flex-col gap-3">
              <div className="h flex md:gap-3 gap-[3px] max-md:text-[9px] text-sm items-center">
                <span className="font-bold text-sm max-md:text-[10px] text-white">Elon Musk</span>
                <span>@elonmusk</span>
                <span>6h</span>
              </div>
              <div className="h text-sm flex flex-col gap-y-2 max-md:text-[10px]">Lorem ipsum dolor.
                <img src="/post.png" className="w-full max-md:min-h-52 rounded-lg" alt="post" />
              </div>
              <div className="h flex justify-between text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-reply"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
              </div>
            </div>
          </div>
        </div>
        {/* third section  */}
        <div className="max-md:hidden text-white w-[25%] pt-5 h-full  overflow-y-scroll overflow-x-hidden pb-5">
          <div className="w-[95%] m-auto flex flex-col gap-5">
            {/* search bar  */}
            <div className="searchbar">
              <input type="text" placeholder="Search" className="px-3 placeholder:text-white py-2 w-full rounded-full bg-stone-700" />
            </div>
            {/* hapening bar  */}
            <div className="searchbar text-sm bg-stone-700 flex flex-col gap-5 rounded-lg p-2">
              <div className="font-extrabold text-lg">Happaning New</div>
              <div>
                <p className="test">Trending in Pakistan</p>
                <p className="test">#New</p>
                <p className="test">40.2K Views</p>
              </div>
              <div>
                <p className="test">Trending in Pakistan</p>
                <p className="test">#New</p>
                <p className="test">40.2K Views</p>
              </div>
              <div>
                <p className="test">Trending in Pakistan</p>
                <p className="test">#New</p>
                <p className="test">40.2K Views</p>
              </div>
              <div>
                <p className="test">Trending in Pakistan</p>
                <p className="test">#New</p>
                <p className="test">40.2K Views</p>
              </div>
            </div>
            {/* folllow  bar  */}
            <div className="text-sm bg-stone-700 flex flex-col gap-5 rounded-lg p-2">
              <h2 className="font-extrabold text-lg">Who to follow</h2>
              <div className="flex justify-between gap-1 items-center px-3">
                <div className="test bg-[url('/img.jpeg')] w-[20%] bg-cover bg-center h-[7vh] rounded-lg"></div>
                <div className="test">
                  <p className="test leading-3">
                    Vercel <br />
                    <span className="text-[10px]">@vercelwalay</span>
                  </p>
                </div>
                <div className="test">
                  <button className="bg-white px-5 py-2 text-black rounded-full">Follow</button>
                </div>
              </div>
              <div className="flex justify-between gap-1 items-center px-3">
                <div className="test bg-[url('/img.jpeg')] w-[20%] bg-cover bg-center h-[7vh] rounded-lg"></div>
                <div className="test">
                  <p className="test leading-3">
                    Vercel <br />
                    <span className="text-[10px]">@vercelwalay</span>
                  </p>
                </div>
                <div className="test">
                  <button className="bg-white px-5 py-2 text-black rounded-full">Follow</button>
                </div>
              </div>
              <div className="flex justify-between gap-1 items-center px-3">
                <div className="test bg-[url('/img.jpeg')] w-[20%] bg-cover bg-center h-[7vh] rounded-lg"></div>
                <div className="test">
                  <p className="test leading-3">
                    Vercel <br />
                    <span className="text-[10px]">@vercelwalay</span>
                  </p>
                </div>
                <div className="test">
                  <button className="bg-white px-5 py-2 text-black rounded-full">Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
