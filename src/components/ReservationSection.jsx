import { useState } from 'react';
import { sendReservationEmail } from '../services/emailService';

function ReservationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '',
    partner: '',
    coupon: '',
    requests: ''
  });

  const [errors, setErrors] = useState({
    phone: '',
    email: '',
    coupon: ''
  });

  // 핸드폰 번호 포맷팅 (000-0000-0000)
  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/[^\d]/g, '');
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  // 핸드폰 번호 검증
  const validatePhone = (phone) => {
    const phoneRegex = /^0\d{2}-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  // 이메일 검증
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let newValue = value;
    let newErrors = { ...errors };

    if (name === 'phone') {
      newValue = formatPhoneNumber(value);
      if (newValue && !validatePhone(newValue)) {
        newErrors.phone = '올바른 핸드폰 번호 형식이 아닙니다 (예: 010-0000-0000)';
      } else {
        newErrors.phone = '';
      }
    }

    if (name === 'email') {
      if (value && !validateEmail(value)) {
        newErrors.email = '올바른 이메일 형식이 아닙니다';
      } else {
        newErrors.email = '';
      }
    }

    // 협력회사 선택 시 쿠폰번호 필수 체크
    if (name === 'partner') {
      if (value && !formData.coupon) {
        newErrors.coupon = '협력회사 선택 시 쿠폰번호는 필수입니다';
      } else {
        newErrors.coupon = '';
      }
    }

    if (name === 'coupon') {
      if (formData.partner && !value) {
        newErrors.coupon = '협력회사 선택 시 쿠폰번호는 필수입니다';
      } else {
        newErrors.coupon = '';
      }
    }

    setErrors(newErrors);
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const getPackageName = (value) => {
    const packages = {
      jeju: '제주도 힐링 투어',
      osaka: '오사카 식도락 여행',
      bali: '발리 럭셔리 휴양'
    };
    return packages[value] || value;
  };

  const getPartnerName = (value) => {
    const partners = {
      boram: '보람상조',
      freed: '프리드'
    };
    return partners[value] || value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 최종 검증
    let hasError = false;
    let newErrors = { ...errors };

    if (!validatePhone(formData.phone)) {
      newErrors.phone = '올바른 핸드폰 번호 형식이 아닙니다 (예: 010-0000-0000)';
      hasError = true;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다';
      hasError = true;
    }

    if (formData.partner && !formData.coupon) {
      newErrors.coupon = '협력회사 선택 시 쿠폰번호는 필수입니다';
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      setSubmitStatus({ type: 'error', message: '입력 정보를 확인해주세요.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const emailData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        packageName: getPackageName(formData.package),
        partner: formData.partner ? getPartnerName(formData.partner) : '',
        coupon: formData.coupon,
        requests: formData.requests,
      };

      const result = await sendReservationEmail(emailData);
      
      setSubmitStatus({ 
        type: 'success', 
        message: '예약 신청이 완료되었습니다. 24시간 이내에 담당자가 연락드립니다.' 
      });
      
      // 폼 초기화
      setFormData({
        name: '',
        phone: '',
        email: '',
        package: '',
        partner: '',
        coupon: '',
        requests: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: '예약 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-sand py-24 px-6 md:px-20 lg:px-40" id="reservation">
      <div className="mx-auto max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-2 bg-primary p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold mb-4 uppercase tracking-widest">Reservation</span>
              <h2 className="text-3xl font-black mb-6 leading-tight">예약 신청</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                전문가와 함께 당신만의 특별한 여정을 계획해보세요. <br className="hidden md:block"/>
                문의를 남겨주시면 24시간 이내에 담당자가 연락드립니다.
              </p>
            </div>
            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-xl">call</span>
                <span>1588-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-xl">mail</span>
                <span>reserve@travel.com</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="name">성함</label>
                  <input 
                    className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary focus:bg-white transition-all" 
                    id="name" 
                    name="name"
                    placeholder="홍길동" 
                    required 
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="phone">연락처</label>
                  <input 
                    className={`w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary focus:bg-white transition-all ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    id="phone" 
                    name="phone"
                    placeholder="010-0000-0000" 
                    required 
                    type="tel"
                    maxLength={13}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="text-xs text-red-500 ml-1">{errors.phone}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="email">이메일 주소</label>
                <input 
                  className={`w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary focus:bg-white transition-all ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  id="email" 
                  name="email"
                  placeholder="example@email.com" 
                  required 
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="package">여행 상품 선택</label>
                <select 
                  className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary focus:bg-white transition-all appearance-none" 
                  id="package" 
                  name="package"
                  required
                  value={formData.package}
                  onChange={handleChange}
                >
                  <option disabled value="">상품을 선택해주세요</option>
                  <option value="jeju">제주도 힐링 투어</option>
                  <option value="osaka">오사카 식도락 여행</option>
                  <option value="bali">발리 럭셔리 휴양</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="partner">
                    협력회사 <span className="text-gray-400 font-normal">(선택)</span>
                  </label>
                  <select 
                    className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary focus:bg-white transition-all appearance-none" 
                    id="partner" 
                    name="partner"
                    value={formData.partner}
                    onChange={handleChange}
                  >
                    <option value="">선택 안함</option>
                    <option value="boram">보람상조</option>
                    <option value="freed">프리드</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="coupon">
                    쿠폰번호 {formData.partner ? <span className="text-red-500">*</span> : <span className="text-gray-400 font-normal">(선택)</span>}
                  </label>
                  <input 
                    className={`w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary focus:bg-white transition-all ${errors.coupon ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    id="coupon" 
                    name="coupon"
                    placeholder="쿠폰번호를 입력해주세요" 
                    type="text"
                    required={!!formData.partner}
                    value={formData.coupon}
                    onChange={handleChange}
                  />
                  {errors.coupon && <p className="text-xs text-red-500 ml-1">{errors.coupon}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1" htmlFor="requests">요청 사항</label>
                <textarea 
                  className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-primary focus:ring-primary focus:bg-white transition-all min-h-[120px]" 
                  id="requests" 
                  name="requests"
                  placeholder="인원수, 희망 날짜 등 추가 요청 사항을 적어주세요."
                  value={formData.requests}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              {/* 상태 메시지 */}
              {submitStatus.message && (
                <div className={`p-4 rounded-xl text-sm font-medium ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">
                      {submitStatus.type === 'success' ? 'check_circle' : 'error'}
                    </span>
                    {submitStatus.message}
                  </div>
                </div>
              )}
              
              <button 
                className={`w-full bg-primary text-white font-black py-4 px-6 rounded-xl hover:bg-[#005a80] transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    전송 중...
                  </>
                ) : (
                  <>
                    예약 신청하기
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationSection;
