// ** React Import
import React, { useEffect, useState } from 'react';

// ** Props
type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false);

  // ** ComponentDidMount
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section id="content" className="flex">
      <div
        id="sidebar"
        className="w-[270px] flex flex-col shrink-0 min-h-screen justify-between p-[30px] border-r border-[#EEEEEE] bg-[#FBFBFB]"
      >
        <div className="w-full flex flex-col gap-[30px]">
          <a href="index.html" className="flex items-center justify-center">
            <img src="assets/images/logo/logo.svg" alt="logo" />
          </a>
          <ul className="flex flex-col gap-3">
            <li>
              <h3 className="font-bold text-xs text-[#A5ABB2]">DAILY USE</h3>
            </li>
            <li>
              <a
                href=""
                className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
              >
                <div>
                  <img src="assets/images/icons/home-hashtag.svg" alt="icon" />
                </div>
                <p className="font-semibold transition-all duration-300 hover:text-white">Overview</p>
              </a>
            </li>
            <li>
              <a
                href=""
                className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 bg-[#2B82FE] transition-all duration-300 hover:bg-[#2B82FE]"
              >
                <div>
                  <img src="assets/images/icons/note-favorite.svg" alt="icon" />
                </div>
                <p className="font-semibold text-white transition-all duration-300 hover:text-white">Courses</p>
              </a>
            </li>
            <li>
              <a
                href=""
                className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
              >
                <div>
                  <img src="assets/images/icons/profile-2user.svg" alt="icon" />
                </div>
                <p className="font-semibold transition-all duration-300 hover:text-white">Students</p>
              </a>
            </li>
            <li>
              <a
                href=""
                className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
              >
                <div>
                  <img src="assets/images/icons/sms-tracking.svg" alt="icon" />
                </div>
                <p className="font-semibold transition-all duration-300 hover:text-white">Messages</p>
                <div className="notif w-5 h-5 flex shrink-0 rounded-full items-center justify-center bg-[#F6770B]">
                  <p className="font-bold text-[10px] leading-[15px] text-white">12</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href=""
                className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
              >
                <div>
                  <img src="assets/images/icons/chart-2.svg" alt="icon" />
                </div>
                <p className="font-semibold transition-all duration-300 hover:text-white">Analytics</p>
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li>
              <h3 className="font-bold text-xs text-[#A5ABB2]">OTHERS</h3>
            </li>
            <li>
              <a
                href=""
                className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
              >
                <div>
                  <img src="assets/images/icons/3dcube.svg" alt="icon" />
                </div>
                <p className="font-semibold transition-all duration-300 hover:text-white">Rewards</p>
              </a>
            </li>
            <li>
              <a
                href=""
                className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
              >
                <div>
                  <img src="assets/images/icons/code.svg" alt="icon" />
                </div>
                <p className="font-semibold transition-all duration-300 hover:text-white">A.I Plugins</p>
              </a>
            </li>
            <li>
              <a
                href=""
                className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
              >
                <div>
                  <img src="assets/images/icons/setting-2.svg" alt="icon" />
                </div>
                <p className="font-semibold transition-all duration-300 hover:text-white">Settings</p>
              </a>
            </li>
            <li>
              <a
                href="signin.html"
                className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
              >
                <div>
                  <img src="assets/images/icons/security-safe.svg" alt="icon" />
                </div>
                <p className="font-semibold transition-all duration-300 hover:text-white">Logout</p>
              </a>
            </li>
          </ul>
        </div>
        <a href="">
          <div className="w-full flex gap-3 items-center p-4 rounded-[14px] bg-[#0A090B] mt-[30px]">
            <div>
              <img src="assets/images/icons/crown-round-bg.svg" alt="icon" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-white">Get Pro</p>
              <p className="text-sm leading-[21px] text-[#A0A0A0]">Unlock features</p>
            </div>
          </div>
        </a>
      </div>
      <div id="menu-content" className="flex flex-col w-full pb-[30px]">
        <div className="nav flex justify-between p-5 border-b border-[#EEEEEE]">
          <form className="search flex items-center w-[400px] h-[52px] p-[10px_16px] rounded-full border border-[#EEEEEE]">
            <input
              type="text"
              className="font-semibold placeholder:text-[#7F8190] placeholder:font-normal w-full outline-none"
              placeholder="Search by report, student, etc"
              name="search"
            />
            <button type="submit" className="ml-[10px] w-8 h-8 flex items-center justify-center">
              <img src="assets/images/icons/search.svg" alt="icon" />
            </button>
          </form>
          <div className="flex items-center gap-[30px]">
            <div className="flex gap-[14px]">
              <a
                href=""
                className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-full border border-[#EEEEEE]"
              >
                <img src="assets/images/icons/receipt-text.svg" alt="icon" />
              </a>
              <a
                href=""
                className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-full border border-[#EEEEEE]"
              >
                <img src="assets/images/icons/notification.svg" alt="icon" />
              </a>
            </div>
            <div className="h-[46px] w-[1px] flex shrink-0 border border-[#EEEEEE]"></div>
            <div className="flex gap-3 items-center">
              <div className="flex flex-col text-right">
                <p className="text-sm text-[#7F8190]">Howdy</p>
                <p className="font-semibold">Fany Alqo</p>
              </div>
              <div className="w-[46px] h-[46px]">
                <img src="assets/images/photos/default-photo.svg" alt="photo" />
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default AdminLayout;
