import backgroundImage from "./assets/images/fondo.jpg"
import './index.css';
import { RxPlus } from "react-icons/rx";
import { RiMenu3Fill, RiCloseLine, RiUserFill, RiShoppingBagFill, RiMenuFill, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { TbSkull, TbSpray } from "react-icons/tb";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <div className=' min-h-screen object-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <sidebar className={`bg-[#1B1B1B] fixed top-0 w-80 h-full border-r border-gray-600 transition-all duration-500 lg:left-0 z-50 ${showMenu ? "left-0" : "-left-full"}`}>
        {/* Logo */}
        <div className="">
          <h1 className="text-[#F1CA87] flex text-4xl uppercase font-bold justify-center mb-10 tracking-[5px] pt-8">Maori</h1>
          <ul>
            <li className="flex items-center hover:bg-[#3C3C3C] py-2 px-10 transition-colors">
              <a href="#" className="uppercase text-[#A5A5A5] flex-1">Home</a>
              <RxPlus className="text-xl text-[#A5A5A5]" />
            </li>
            <li className="flex items-center hover:bg-[#3C3C3C] py-2 px-10 transition-colors">
              <a href="#" className="uppercase text-[#A5A5A5] flex-1">Blog</a>
              <RxPlus className="text-xl text-[#A5A5A5]" />
            </li>
            <li className="flex items-center hover:bg-[#3C3C3C] py-2 px-10 transition-colors">
              <a href="#" className="uppercase text-[#A5A5A5] flex-1">Pages</a>
              <RxPlus className="text-xl text-[#A5A5A5]" />
            </li>
            <li className="flex items-center hover:bg-[#3C3C3C] py-2 px-10 transition-colors">
              <a href="#" className="uppercase text-[#A5A5A5] flex-1">Shop</a>
              <RxPlus className="text-xl text-[#A5A5A5]" />
            </li>
            <li className="flex items-center hover:bg-[#3C3C3C] py-2 px-10 transition-colors">
              <a href="#" className="uppercase text-[#A5A5A5] flex-1">Contact</a>
              <RxPlus className="text-xl text-[#A5A5A5]" />
            </li>
          </ul>
          <button onClick={toggleMenu} className="fixed bottom-6 right-6 lg:hidden bg-[#F1CA87] rounded-full p-2 text-3xl ">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}</button>
        </div>
      </sidebar>
      {/* Header */}
      <header className="bg-[#1B1B1B] fixed px-5 py-4 flex w-full md:w-[300px] md:right-20 lg:right-40 justify-center gap-4 z-40">
        <h2 className="text-[#F1CA87] uppercase font-medium">Call us: 555 55 55</h2>
        <ul className="flex gap-6 text-white text-lg items-center">
          <li>
            <a href=""><RiUserFill /></a>
          </li>
          <li>
            <a href=""><RiShoppingBagFill /></a>
          </li>
          <li>
            <a href="" className="relative"><RiMenuFill /><button className="absolute bg-[#F1CA87] flex top-[-5px] right-8  rounded-full px-1 text-xs">0</button></a>
          </li>
        </ul>
      </header>
      {/* Content */}
      <main className=" p-[30px] pt-36 md:pl-[100px] lg:pl-[400px] md:pr-0">
        <div className="bg-[#1B1B1B] relative p-2 md:pr-10 drop-shadow-xl">
          <img src="https://img.freepik.com/foto-gratis/proceso-salon-tatuajes-chica-tatuadora-relleno-tatuaje-proceso-rellenar-tatuaje-cuerpo-primer-plano-manos_1321-3001.jpg?w=740&t=st=1689118077~exp=1689118677~hmac=4539b8b52ecf0cf8f451ad5a43f4c5cf35a3561e5d72f8ea56d04af85597f72e" alt="" className="w-full h-[400px] object-cover" />
          <div className="absolute flex text-white text-4xl top-3 left-3 cursor-pointer">
            <RiArrowLeftSLine className="hover:text-gray-500" /><RiArrowRightSLine className="hover:text-gray-500" />
          </div>
          <div className="absolute left-5 sm:left-20 top-40 max-w-xl">
            <h1 className="uppercase text-white text-3xl lg:text-4xl font-bold bg-[#1B1B1B] p-2 pb-0">Welcome to maori</h1>
            <p className="text-[#A5A5A5] lg:text-xl p-2 lg:pl-11 pb-2 pt-0 bg-[#1B1B1B]">The Best Tattoo Studio In Town!</p>

          </div>
          <button className="absolute flex items-center gap-2 uppercase bg-[#F1CA87] font-bold p-2 left-5 bottom-[90px] sm:left-20 sm:bottom-[100px] group hover:bg-[#d3b175]">
            book an appointment <RiArrowRightSLine className="text-xl group-hover:translate-x-1 transition-all" />
          </button>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid justify-items-center p-10 mt-10 md:mr-10 mb-10 bg-[#1B1B1B]">
            <TbSkull className="bg-[#F1CA87] text-7xl p-2 rounded-full text-[#1B1B1B]" />
            <h1 className="text-white font-bold text-2xl p-2">Award Winning Artists</h1>
            <p className="text-[#A5A5A5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="grid justify-items-center p-10 md:mt-10 md:mr-10 mb-10 bg-[#1B1B1B]">
            <TbSpray className="bg-[#F1CA87] text-7xl p-2 rounded-full text-[#1B1B1B]" />
            <h1 className="text-white font-bold text-2xl p-2">Safe, Sterile Environment</h1>
            <p className="text-[#A5A5A5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="bg-[#1B1B1B] p-5 border-double border-t-8 border-l-8 border-b-8 border-r-8 md:border-r-0 border-[#3C3C3C] mb-10">
          <h1 className="uppercase text-white font-bold text-2xl">meet the Artists</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-4 md:gap-4 md:mr-10">
          <div className="bg-[#1B1B1B] pb-4 mb-4">
            <img src="https://magazink.inkonsky.com/wp-content/uploads/2022/12/fran-fernandez.jpg" alt="" className="w-full h-50 object-cover" />
            <p className="uppercase text-[#F1CA87] font-semibold pl-4 pt-4">tattoo artists & piercer</p>
            <h2 className="text-white text-xl pl-4">Juan Fernandez</h2>
          </div>
          <div className="bg-[#1B1B1B] pb-4 mb-4">
            <img src="https://cheyennetattoo.com/uploads/media/900x900/02/1292-Artist_Sergio%20Lagrimas.png?v=1-0" alt="" className="w-full h-50 object-cover" />
            <p className="uppercase text-[#F1CA87] font-semibold pl-4 pt-4">tattoo artists & piercer</p>
            <h2 className="text-white text-xl pl-4">Sergio Doce</h2>
          </div>
          <div className="bg-[#1B1B1B] pb-4 mb-4">
            <img src="https://cheyennetattoo.com/uploads/media/900x900/02/192-Goethe-Silver.jpg?v=1-0" alt="" className="w-full h-50 object-cover" />
            <p className="uppercase text-[#F1CA87] font-semibold pl-4 pt-4">tattoo artists & piercer</p>
            <h2 className="text-white text-xl pl-4">Goethe Silver</h2>
          </div>
        </div>
        {/*Buttons */}
        <div className="flex flex-row items-center justify-between ml-0 md:mr-10 pb-20">
          <button className="uppercase text-white bg-[#1B1B1B] px-4 py-2 hover:text-gray-500">view all</button>
          <div className="flex gap-2">
            <div className=" bg-[#1B1B1B] text-white text-4xl rounded-full cursor-pointer">
              <RiArrowLeftSLine className="hover:text-gray-500" />
            </div>
            <div className="bg-[#1B1B1B] text-white text-4xl rounded-full cursor-pointer">
              <RiArrowRightSLine className="hover:text-gray-500" />
            </div>
          </div>
        </div>
      </main>
    </div>


  )
}

export default App
