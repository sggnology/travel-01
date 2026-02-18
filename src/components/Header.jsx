import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-primary/90 backdrop-blur-md px-6 py-4 shadow-sm transition-all duration-300 md:px-10 lg:px-40">
      <div className="flex items-center gap-4 text-white">
        <div className="size-8 rounded-full bg-white/20 flex items-center justify-center">
          <img src="/logo.svg" alt="전미주투어 로고" className="w-8 h-8 rounded-full" />
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-tight text-white">전미주투어</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-8">
          <a className="text-white/90 hover:text-white text-sm font-medium transition-colors" href="#home">홈</a>
          <a className="text-white/90 hover:text-white text-sm font-medium transition-colors" href="#about">소개</a>
          <a className="text-white/90 hover:text-white text-sm font-medium transition-colors" href="#packages">상품</a>
          <a className="text-white/90 hover:text-white text-sm font-medium transition-colors" href="#reservation">예약 신청</a>
        </nav>
        <a className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white text-primary hover:bg-white/90 transition-colors text-sm font-bold shadow-lg" href="#reservation">
          <span className="truncate">예약하기</span>
        </a>
      </div>
      <button 
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-outlined text-3xl">menu</span>
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col p-4 gap-4">
            <a className="text-white/90 hover:text-white text-sm font-medium transition-colors py-2" href="#home" onClick={() => setIsMenuOpen(false)}>홈</a>
            <a className="text-white/90 hover:text-white text-sm font-medium transition-colors py-2" href="#about" onClick={() => setIsMenuOpen(false)}>소개</a>
            <a className="text-white/90 hover:text-white text-sm font-medium transition-colors py-2" href="#packages" onClick={() => setIsMenuOpen(false)}>상품</a>
            <a className="text-white/90 hover:text-white text-sm font-medium transition-colors py-2" href="#reservation" onClick={() => setIsMenuOpen(false)}>예약 신청</a>
            <a className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white text-primary hover:bg-white/90 transition-colors text-sm font-bold shadow-lg mt-2" href="#reservation" onClick={() => setIsMenuOpen(false)}>
              <span className="truncate">예약하기</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
