const YOUTUBE_CHANNEL =
  'https://www.youtube.com/@%E3%82%8B%E3%82%8A%E3%81%8B%E3%82%89%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB';

type Platform = 'youtube' | 'instagram' | 'tiktok';

function SocialIcon({ platform }: { platform: Platform }) {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" aria-hidden="true">
      {platform === 'youtube' ? (
        <>
          <rect x="2" y="6" width="28" height="20" rx="6" fill="currentColor" />
          <path d="M13 11.5L21 16L13 20.5Z" fill="#fff" />
        </>
      ) : platform === 'instagram' ? (
        <>
          <rect x="4" y="4" width="24" height="24" rx="7" stroke="currentColor" stroke-width="2.5" />
          <circle cx="16" cy="16" r="5.5" stroke="currentColor" stroke-width="2.5" />
          <circle cx="23.5" cy="8.5" r="1.5" fill="currentColor" />
        </>
      ) : (
        <path d="M19 4V21a6 6 0 1 1-6-6v4a2 2 0 1 0 2 2V4h4c0 4 3 6 7 6v4c-3 0-5-1-7-3" fill="currentColor" />
      )}
    </svg>
  );
}

const ACCOUNTS = [
  { platform: 'youtube', name: 'YouTube', label: 'メインチャンネル', href: YOUTUBE_CHANNEL },
  { platform: 'youtube', name: 'YouTube', label: 'サブチャンネル', href: null },
  { platform: 'instagram', name: 'Instagram', label: 'サブアカウント', href: null },
  { platform: 'tiktok', name: 'TikTok', label: '公式アカウント', href: null }
] as const;

export function Social() {
  return (
    <>
      <section class="sectionBorderPink" aria-labelledby="social-title" data-reveal-section>
        <h2 class="sectionTitleWithBorder effect" id="social-title">
          動画・SNS
          <span class="sectionSubTitle">SOCIAL</span>
        </h2>
        <ul class="homeSocialGrid effect">
          {ACCOUNTS.map((account) => {
            const content = (
              <>
                <div class="homeSocialCardTop">
                  <span class={`homeSocialIcon homeSocialIcon--${account.platform}`}>
                    <SocialIcon platform={account.platform} />
                  </span>
                  {!account.href && <span class="homeSocialBadge">準備中</span>}
                </div>
                <h3>{account.name}<span>{account.label}</span></h3>
                <p class="homeSocialCardBottom">
                  {account.href ? 'チャンネルを見る' : '公開までお待ちください'}
                </p>
              </>
            );
            return (
              <li>
                {account.href ? (
                  <a class="homeSocialCard homeSocialCardLink" href={account.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div class="homeSocialCard homeSocialCardPending">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
      <div class="sectionBorderPinkBottom" aria-hidden="true" />
    </>
  );
}
