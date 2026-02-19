function AboutSection() {
  const features = [
    {
      icon: 'map',
      title: '맞춤형 플랜',
      description: '고객님의 취향을 분석하여 최적의 여행 코스를 제안합니다.'
    },
    {
      icon: 'support_agent',
      title: '24시간 케어',
      description: '여행 중 발생할 수 있는 모든 상황에 신속하게 대응합니다.'
    }
  ];

  const images = [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdjNSTeehc3ZRoJeGqO0xfQkGc3NMPxNJl5JLcS2-GpoORiiLVy-f_KZti4VKS_C1gnY5qH5M84s-usa0qZIqemi41DRMQhqcwB2CdFoCIsuhUN34Z1IxQ904lGm8tZNZs4Ku5e4rY0pOPu_-DMJqhsOSKm8e6-EEsjNPyvEMIL_5ckeJpahhMR9db8T12AO8hSMJsjKlW7plL4koH7YiQ14XCEeOtnVrlUUiDh_CpoqxoN4igWdmCXY-UBCKBaSyvZGWR7Pjbu8E',
      height: 'h-64'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA990fSTjntE5xAMGVH15QsP8pZAxM4WnQVzQsJi4dMC2lGRTuuf5i4mQzrCFn1A0UkSk19LGIlqLj3S04ZCoUagPH-9EtKCt2vC7CF7k8TCakU7IJdcFcmuifcNSD2yruUIVTGI-muZ3dkiBl0iMpzcJnUchVEa-R3WkKdxkjGnoO1vWWdUywGYWi-1QNcheqTU4UCWTpq4OQu0Qc58VmldLLbe55dbPbR-ykm7WkV4Lye81cSCGjrGYpBuFG_OpzZEpa-75MfPDo',
      height: 'h-40'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6cQxm6j_vmJmTYEDib1qhxOgHqCJqjnzvr_PYB4qoPqbM5DJuon97tGHer2WrpuTiwU3Um_32f1UN_2tGBxCUy4CFGEJDtpG5R7A-uN9tEhlolsSN72QX1C8_U0EvfuY7gtIDk_vVmLf3VAHwkN1bCvXxz0h2W8_YWCPHFXs3NTX35xJRGPWFIIRK6HYCvOcVaM7LIOWXGKd697pKoL7zf-RUOQg66kQD2rWLNIqw58URIhI-NSfNBnBDq1Mmt58Szf1V879slcM',
      height: 'h-40'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZQ8u4d0pipzWPPaCb051y6_61je9HMqUiETkApkZgpJC3dWGn4cPDaAbEqOkmmo985ZJ7fifKwOtnJCD44NJKUnMlzdl8wif_Rg39GopLOdlrIGVIRVt61As_RS3LGyjRt8nCWqcxLutiDGWyAg0EGdiCyXBPRwMYxVllI3YjHVHBmGC62PV6KJDzdLLULR7yijUce6AvRMSTfQCDLvlQytTevBoY11XliwWGLOV32UhZYaS7eNOf3zuFzKV7i9lcOjKPtFrrAok',
      height: 'h-64'
    }
  ];

  return (
    <section className="bg-sand py-24 px-6 md:px-20 lg:px-40" id="about">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="relative w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div 
                  className="overflow-hidden rounded-2xl shadow-lg h-64 w-full bg-cover bg-center" 
                  style={{ backgroundImage: `url('${images[0].url}')` }}
                ></div>
                <div 
                  className="overflow-hidden rounded-2xl shadow-lg h-40 w-full bg-cover bg-center" 
                  style={{ backgroundImage: `url('${images[1].url}')` }}
                ></div>
              </div>
              <div className="space-y-4">
                <div 
                  className="overflow-hidden rounded-2xl shadow-lg h-40 w-full bg-cover bg-center" 
                  style={{ backgroundImage: `url('${images[2].url}')` }}
                ></div>
                <div 
                  className="overflow-hidden rounded-2xl shadow-lg h-64 w-full bg-cover bg-center" 
                  style={{ backgroundImage: `url('${images[3].url}')` }}
                ></div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] rounded-full bg-primary/5 blur-3xl"></div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">About Monkey Trip</h3>
              <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight tracking-tight">
                여행, 그 이상의<br/>가치를 선물합니다
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Monkey Trip은 단순한 여행이 아닌, 삶의 쉼표가 되는 특별한 경험을 제공합니다. 
              바쁜 일상 속에서 잠시 벗어나, 오로지 나에게 집중할 수 있는 시간을 만들어드립니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm border border-primary/10">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
