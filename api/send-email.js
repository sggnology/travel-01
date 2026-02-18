import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, packageName, partner, coupon, requests } = req.body;

    // 필수 필드 검증
    if (!name || !phone || !email || !packageName) {
      return res.status(400).json({ error: '필수 정보가 누락되었습니다.' });
    }

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
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>⛵ Ocean Travel 예약 신청</h1>
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
            © 2024 Ocean Travel Inc. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;

    // 텍스트 버전
    const textContent = `
Ocean Travel 예약 신청서
========================

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
본 메일은 Ocean Travel 웹사이트에서 발송되었습니다.
    `;

    const { data, error } = await resend.emails.send({
      from: 'Ocean Travel <onboarding@resend.dev>', // 도메인 인증 후 변경 가능
      to: [process.env.RESERVATION_EMAIL || 'reserve@oceantravel.com'],
      replyTo: email,
      subject: `[Ocean Travel 예약문의] ${packageName} - ${name}`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: '이메일 전송에 실패했습니다.', details: error.message });
    }

    return res.status(200).json({ 
      success: true, 
      message: '예약 신청이 완료되었습니다.',
      id: data.id 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: '서버 오류가 발생했습니다.', details: error.message });
  }
}
