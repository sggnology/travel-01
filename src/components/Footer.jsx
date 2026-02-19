function Footer() {
  // 주소 정보
  const address = "서울특별시 중구 을지로3길 34 산다빌딩 411호";
  const encodedAddress = encodeURIComponent(address);
  
  // 네이버 지도 URL
  const mapUrl = `https://map.naver.com/v5/search/${encodedAddress}`;

  return (
    <footer className="bg-background-dark text-white/80 py-16 px-6 md:px-20 lg:px-40" id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <img src="/logo.svg" alt="Monkey Trip 로고" className="w-8 h-8 rounded-full" />
              <span className="text-2xl font-bold tracking-tight">Monkey Trip</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              당신의 꿈을 현실로 만드는 여행 파트너.<br/>
              언제나 고객님의 행복을 최우선으로 생각합니다.
            </p>
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
                  <span className="block text-white font-bold">02-736-2126</span>
                  <span className="text-white/50 text-xs">평일 09:00 - 18:00</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">mail</span>
                <span>allusa@naver.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                <a 
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  서울특별시 중구 을지로3길 34<br/>산다빌딩 411호
                </a>
              </li>
            </ul>
          </div>
          <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl overflow-hidden h-40 bg-gray-700 relative group cursor-pointer block"
            title="지도에서 위치 보기"
          >
            <img 
              alt="Map location" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtVVxtTZzPfidIa5WEZI8t8Yb0VnNnVsPKYiQ4gG_7iS9t8T9TlBF7stEFBGaVA5UvZBkSnaLVKbk1zHTNmxj4f2xCXXEV8XTys-HUj0BfmnoXUqU3jrXFd9yLjY3JlLof9agt6xY3sYbg7L4BULaOYQaRscOevxVEKvcvezQY7f_38a2WOeqjYm60JaBNzPyUhY_HcSSzDtmUxFkMGrjJ9YjsRzW8p9LyaVf3Wkba101wW_ga0L1gSFQUn7xWlYZ6E4quURwfYHw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <span className="material-symbols-outlined text-white text-3xl drop-shadow-md">map</span>
            </div>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© Monkey Trip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
