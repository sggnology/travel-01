function Footer() {
  return (
    <footer className="bg-background-dark text-white/80 py-16 px-6 md:px-20 lg:px-40" id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-3xl">sailing</span>
              <span className="text-2xl font-bold tracking-tight">전미주투어</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              당신의 꿈을 현실로 만드는 여행 파트너.<br/>
              언제나 고객님의 행복을 최우선으로 생각합니다.
            </p>
            <div className="flex gap-4 pt-2">
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#">
                <span className="text-xs font-bold">IN</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#">
                <span className="text-xs font-bold">FB</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white" href="#">
                <span className="text-xs font-bold">YT</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">바로가기</h4>
            <ul className="space-y-3 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#about">회사 소개</a></li>
              <li><a className="hover:text-primary transition-colors" href="#packages">여행 패키지</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">이용약관</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">개인정보처리방침</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">고객센터</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">phone_in_talk</span>
                <div>
                  <span className="block text-white font-bold">1588-0000</span>
                  <span className="text-white/50 text-xs">평일 09:00 - 18:00</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">mail</span>
                <span>support@travel.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                <span>서울특별시 강남구 테헤란로 123<br/>오션빌딩 5층</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden h-40 bg-gray-700 relative group cursor-pointer">
            <img 
              alt="Map location" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtVVxtTZzPfidIa5WEZI8t8Yb0VnNnVsPKYiQ4gG_7iS9t8T9TlBF7stEFBGaVA5UvZBkSnaLVKbk1zHTNmxj4f2xCXXEV8XTys-HUj0BfmnoXUqU3jrXFd9yLjY3JlLof9agt6xY3sYbg7L4BULaOYQaRscOevxVEKvcvezQY7f_38a2WOeqjYm60JaBNzPyUhY_HcSSzDtmUxFkMGrjJ9YjsRzW8p9LyaVf3Wkba101wW_ga0L1gSFQUn7xWlYZ6E4quURwfYHw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-3xl drop-shadow-md">map</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© 전미주투어 Inc. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Design by UI Designer</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
