import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import { config } from 'dotenv';

// .env 파일 로드
config();

const app = express();
const PORT = 3001;

// 미들웨어
app.use(cors());
app.use(express.json());

// Resend 인스턴스
const resend = new Resend(process.env.RESEND_API_KEY);

// 개발 환경 여부
const isDev = process.env.NODE_ENV !== 'production';

// 이메일 전송 API
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, phone, email, packageName, partner, coupon, requests } = req.body;

    // 필수 필드 검증
    if (!name || !phone || !email || !packageName) {
      return res.status(400).json({ error: '필수 정보가 누락되었습니다.' });
    }

    // 개발 환경에서는 테스트 이메일로, 프로덕션에서는 실제 수신자로
    const toEmail = isDev 
      ? (process.env.TEST_EMAIL || 'sggnology@gmail.com')
      : (process.env.RESERVATION_EMAIL || 'allusa@naver.com');

    // 이메일 본문 HTML 생성
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Noto Sans KR', sans-serif; background-color: #f5f5f0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
          .header { background: #006894; color: white; padding: 32px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 32px; }
          .section { margin-bottom: 24px; }
          .section-title { color: #006894; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-bottom: 12px; border-bottom: 2px solid #006894; padding-bottom: 8px; }
          .info-row { display: flex; padding: 8px 0; border-bottom: 1px solid #eee; }
          .label { color: #666; width: 100px; flex-shrink: 0; }
          .value { color: #333; font-weight: 500; }
          .requests-box { background: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap; }
          .footer { background: #0f1d23; color: white; padding: 20px; text-align: center; font-size: 12px; }
          .dev-notice { background: #fff3cd; color: #856404; padding: 12px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          ${isDev ? '<div class="dev-notice">⚠️ 개발 환경 테스트 메일입니다</div>' : ''}
          <div class="header">
            <h1>⛵ Monkey Trip 예약 신청</h1>
          </div>
          <div class="content">
            <div class="section">
              <div class="section-title">고객 정보</div>
              <div class="info-row"><span class="label">성함</span><span class="value">${name}</span></div>
              <div class="info-row"><span class="label">연락처</span><span class="value">${phone}</span></div>
              <div class="info-row"><span class="label">이메일</span><span class="value">${email}</span></div>
            </div>
            <div class="section">
              <div class="section-title">예약 정보</div>
              <div class="info-row"><span class="label">선택 상품</span><span class="value">${packageName}</span></div>
              ${partner ? `<div class="info-row"><span class="label">협력회사</span><span class="value">${partner}</span></div>` : ''}
              ${coupon ? `<div class="info-row"><span class="label">쿠폰번호</span><span class="value">${coupon}</span></div>` : ''}
            </div>
            ${requests ? `
            <div class="section">
              <div class="section-title">요청 사항</div>
              <div class="requests-box">${requests}</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            © Monkey Trip Inc. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;

    // 텍스트 버전
    const textContent = `
Monkey Trip 예약 신청서
========================
${isDev ? '[개발 환경 테스트 메일]\n' : ''}
■ 고객 정보
- 성함: ${name}
- 연락처: ${phone}
- 이메일: ${email}

■ 예약 정보
- 선택 상품: ${packageName}
${partner ? `- 협력회사: ${partner}` : ''}
${coupon ? `- 쿠폰번호: ${coupon}` : ''}

${requests ? `■ 요청 사항\n${requests}` : ''}

========================
본 메일은 Monkey Trip 웹사이트에서 발송되었습니다.
    `;

    console.log(`📧 이메일 전송 시도: ${toEmail}`);

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Monkey Trip <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email,
      subject: `${isDev ? '[테스트] ' : ''}[Monkey Trip 예약문의] ${packageName} - ${name}`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return res.status(500).json({ error: '이메일 전송에 실패했습니다.', details: error.message });
    }

    console.log(`✅ 이메일 전송 성공: ${data.id}`);
    return res.status(200).json({ 
      success: true, 
      message: '예약 신청이 완료되었습니다.',
      id: data.id 
    });

  } catch (error) {
    console.error('❌ Server error:', error);
    return res.status(500).json({ error: '서버 오류가 발생했습니다.', details: error.message });
  }
});

// 헬스 체크
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', mode: isDev ? 'development' : 'production' });
});

// 서버 시작
app.listen(PORT, () => {
  console.log('');
  console.log('🚀 Monkey Trip 로컬 API 서버');
  console.log('================================');
  console.log(`📍 서버 주소: http://localhost:${PORT}`);
  console.log(`🔧 모드: ${isDev ? '개발 (테스트 이메일로 발송)' : '프로덕션'}`);
  console.log(`📧 수신 이메일: ${isDev ? (process.env.TEST_EMAIL || 'sggnology@gmail.com') : (process.env.RESERVATION_EMAIL || 'allusa@naver.com')}`);
  console.log('================================');
  console.log('');
});
