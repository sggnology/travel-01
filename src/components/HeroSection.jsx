function HeroSection() {

  const currentYear = new Date().getFullYear();

  return (
    <section 
      className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" 
      id="home" 
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuB5tPhpeEhnmjJseaw1MgFx8yGB45HK7_VlhtanR67H6uCaJeqRqb72c9NiyPn3RFwaStLcJfjx5YBG9Ff3kZ1e2qUS_rl8XmY9vuwEzHd1QTnua__-XUGqnzsoOfTJ-4NDKEv5M78GWNnjIcfhLvh5-UMhQ7luf_kKeO9srEf5OGfszn-8YN8Iq66701RlnYDoRp4uYq4rKoErKyuO3cOkpltuDcyd8e-HD-wWqRCgUjFIkgLobIUXr3Gt8HFk7YkS1ENGpn6JA')"
      }}
    >
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
        <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-400"></span> 
          {currentYear}년 최고의 휴양지 선정
        </span>
        <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-7xl drop-shadow-lg">
          꿈꾸던 여행을<br/>현실로 만드세요
        </h1>
        <p className="max-w-2xl text-lg text-white/90 md:text-xl font-normal leading-relaxed drop-shadow-md">
          전미주투어와 함께 일상에서 벗어나 특별한 쉼표를 찍어보세요. <br className="hidden md:block"/>
          당신만을 위한 완벽한 힐링 여행이 기다리고 있습니다.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <a className="group flex h-14 min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-full bg-primary hover:bg-[#005a80] px-8 text-white text-base font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,104,148,0.5)] hover:shadow-[0_0_30px_rgba(0,104,148,0.7)] hover:-translate-y-1" href="#packages">
            여행 상품 보기
            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
          <a className="flex h-14 min-w-[180px] cursor-pointer items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-primary px-8 text-white text-base font-bold transition-all duration-300" href="#about">
            더 알아보기
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
      </div>
    </section>
  );
}

export default HeroSection;
