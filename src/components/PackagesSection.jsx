function PackagesSection() {
  const packages = [
    {
      id: 'jeju',
      title: '제주도 힐링 투어',
      description: '에메랄드빛 바다와 오름을 거닐며 진정한 휴식을 즐기는 프리미엄 제주 여행입니다.',
      duration: '2박 3일',
      rating: 4.9,
      price: '₩350,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCprGgstwbZFlh4hSmk-jJlQDJRQotMVBF-s__m_YyXa97ELa1QlxupsRU97EYV_iL1DE3G2avu0lEiLSbQEfRbKz424q-wW7YJ1AUoplGi1t1gktbQaedsGODduAz6Mh1OI3m74-80FHOY6BUVe-8laZVmWinTbsR_qN2u32AAmvemuT5dlkc7GbdgnmP1NywzW6KuYOlexnfePUSsDHXGo9HB2vImxJsqA5-yIm-4x25uOUjQXja-8cC7Nq-CKb9zvkZfKtumDKo'
    },
    {
      id: 'osaka',
      title: '오사카 식도락 여행',
      description: '맛의 천국 오사카에서 즐기는 끝없는 미식 탐방과 유니버셜 스튜디오 투어.',
      duration: '3박 4일',
      rating: 4.8,
      price: '₩550,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC4balMUkqx0Ujsd3MbW3V42Q7ye1eEVdzYNdWnMzG3e6rmnmqYPb15ux1B5Ys10CfpZnctXbBEk1UiDlgzXYvZQU74uMCaJt_L4bnU9n4Ts4hzk6FaE_yQiXpIfeiWJfwx-MeXg1473gFmQJS-QeJ7plNQ2qldG-n8yLHH_iE-n431BAawZhb8cR04ZJKWPByVpN76QuTdFx6W-_5uMrje1zs2kyO758y3yJcBiDf-Ei0huNVKxRcerIukgswUOl_FLy2aZDXT5c'
    },
    {
      id: 'bali',
      title: '발리 럭셔리 휴양',
      description: '신들의 섬 발리 풀빌라에서 보내는 꿈같은 시간. 럭셔리 스파와 프라이빗 투어.',
      duration: '4박 6일',
      rating: 5.0,
      price: '₩1,200,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe0qRQzexYJsFokvscsVWRAK4K27sHVf23ITonqnnpcVn_WvS7bx5_scwp1U0fSLG7swmr7mqp_a4JpQWC5CHNlBzeJr-NzAKAzgy5p_soJx_XOJ3QT18R6dKoNtiYrsnGzR9aAdbDL7TJ5nqbmKGOYrI6N-2e90F4vBp2oUzuQ0MeyBxM1BG1ModNTyNr-wnj82ZkEocxFxKBDPU53FaqxEQXY8Einij12BmOmrFHEyNz7WZYZx2dZ0C0ergBRpeWPLG2b8z6J0I'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-20 lg:px-40 bg-white" id="packages">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">BEST PACKAGES</span>
          <h2 className="text-4xl font-black text-text-main mb-6 tracking-tight">인기 여행 상품</h2>
          <p className="text-gray-500 text-lg">전미주투어 고객님들이 가장 사랑하는 베스트 여행지를 만나보세요.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${pkg.image}')` }}
                ></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {pkg.duration}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-text-main">{pkg.title}</h3>
                  <div className="flex items-center text-yellow-400 text-sm font-bold">
                    <span className="material-symbols-outlined text-lg mr-1 fill-current">star</span>
                    {pkg.rating}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">1인 기준</p>
                    <p className="text-xl font-black text-primary">{pkg.price}</p>
                  </div>
                  <a className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-[#005a80] transition-colors flex items-center gap-1 group/btn" href="#reservation">
                    예약문의
                    <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;
