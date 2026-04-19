const COLORS = {
  obsidian: '#131313',
  panel: '#1a1a1a',
  slate: '#2A2A2A',
  electric: '#00D1FF',
  gold: '#FFD59C',
  text: '#F5F5F5',
  muted: '#A1A1AA',
};

export function BrandMark() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: COLORS.obsidian,
      }}
    >
      <div
        style={{
          width: '78%',
          height: '78%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 28,
          border: `2px solid ${COLORS.slate}`,
          background: COLORS.panel,
          boxShadow: '0 0 0 2px rgba(0, 209, 255, 0.12) inset',
          position: 'relative',
        }}
      >
        <div
          style={{
            color: COLORS.electric,
            fontSize: 118,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.08em',
          }}
        >
          N
        </div>
        <div
          style={{
            position: 'absolute',
            top: '18%',
            right: '24%',
            width: 16,
            height: 16,
            borderRadius: 9999,
            background: COLORS.gold,
            boxShadow: `0 0 12px ${COLORS.gold}`,
          }}
        />
      </div>
    </div>
  );
}

export function SocialShareCard() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        background: COLORS.obsidian,
        color: COLORS.text,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 28,
          borderRadius: 34,
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.03)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 96,
          width: 300,
          height: '100%',
          background: 'rgba(0, 209, 255, 0.08)',
          transform: 'skewX(-18deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 72,
          right: 84,
          width: 180,
          height: 180,
          borderRadius: 9999,
          border: '1px solid rgba(255,213,156,0.28)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 66,
          right: 128,
          width: 240,
          height: 2,
          background: 'rgba(255,213,156,0.42)',
        }}
      />
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '56px 64px',
          gap: 48,
        }}
      >
        <div
          style={{
            width: 260,
            height: 260,
            display: 'flex',
            flexShrink: 0,
          }}
        >
          <BrandMark />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 18px',
              borderRadius: 9999,
              border: '1px solid rgba(0,209,255,0.28)',
              color: COLORS.electric,
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Agents • Workflows • Systems
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 84,
              lineHeight: 0.94,
              letterSpacing: '-0.07em',
              fontWeight: 800,
            }}
          >
            Nehorai Hadad
          </div>
          <div
            style={{
              marginTop: 22,
              maxWidth: 620,
              fontSize: 34,
              lineHeight: 1.32,
              color: '#D4D4D8',
            }}
          >
            AI engineer and full-stack builder shipping production-grade agents, automation, and modern web products.
          </div>
          <div
            style={{
              marginTop: 30,
              display: 'flex',
              alignItems: 'center',
              color: COLORS.gold,
              fontSize: 24,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            nehoraihadad.com
          </div>
        </div>
      </div>
    </div>
  );
}
