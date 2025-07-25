import ELTLogo from '@/common/ELTLogo';
import { ImageResponse } from 'next/og';
export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #f3e9ff, #ffffff)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px',
          position: 'relative'
        }}
      >
        <div style={{position: 'absolute', display: 'flex', width: '100%', height: '100%' }}>
          <ELTLogo
            height="100%"
            width="100%"
            style={{color: '#2f5d62'}}
          />
        </div>
        <h1
          style={{
            fontSize: 50,
            fontWeight: 700,
            color: '#2f5d62',
            position: 'absolute',
            bottom: 13
          }}
          
        >
          EverLessTech
        </h1>
        <p
          style={{
            fontSize: 32,
            color: '#2f5d62',
            marginTop: 24,
            fontStyle: 'italic',
            position: 'absolute',
            bottom: -10,
          }}
        >
          Less tech, more life.
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
