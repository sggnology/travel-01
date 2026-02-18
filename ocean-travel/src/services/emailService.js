/**
 * 이메일 전송 서비스
 * Vercel API Routes를 통해 Resend로 이메일을 전송합니다.
 */

const API_ENDPOINT = '/api/send-email';

/**
 * 예약 이메일 전송
 * @param {Object} data - 예약 정보
 * @param {string} data.name - 고객 성함
 * @param {string} data.phone - 연락처
 * @param {string} data.email - 이메일 주소
 * @param {string} data.packageName - 여행 상품명
 * @param {string} [data.partner] - 협력회사
 * @param {string} [data.coupon] - 쿠폰번호
 * @param {string} [data.requests] - 요청사항
 * @returns {Promise<{success: boolean, message: string, id?: string}>}
 */
export async function sendReservationEmail(data) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || '이메일 전송에 실패했습니다.');
    }

    return result;
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
}

/**
 * 이메일 전송 상태 확인 (향후 확장용)
 * @param {string} emailId - 이메일 ID
 * @returns {Promise<Object>}
 */
export async function checkEmailStatus(emailId) {
  // 향후 이메일 전송 상태 확인 기능 구현
  return { id: emailId, status: 'sent' };
}

export default {
  sendReservationEmail,
  checkEmailStatus,
};
