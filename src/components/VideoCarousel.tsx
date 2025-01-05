import React from 'react'
import { Card } from '@/components/ui/card'

const videos = [
  { url: 'https://streamable.com/e/6pwq6s', id: 'v1_dealSoldier' },
  { url: 'https://streamable.com/e/oxev7x', id: 'v2_dealSoldier' },
  { url: 'https://streamable.com/e/zupyv3', id: 'v3_dealSoldier' },
  { url: 'https://streamable.com/e/cfx1lw', id: 'v4_dealSoldier' },
  { url: 'https://streamable.com/e/c98ydr', id: 'v5_dealSoldier' },
  { url: 'https://streamable.com/e/m1p8ok', id: 'v6_dealSoldier' },
  { url: 'https://streamable.com/e/y5l9kg', id: 'v7_dealSoldier' },
]

export function VideoCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.slice(0, 6).map((video) => (
          <div key={video.id} className="aspect-[9/16] relative">
            <Card className="w-full h-full overflow-hidden">
              <iframe
                src={`${video.url}?autoplay=0&controls=1`}
                className="w-full h-full absolute inset-0"
                allowFullScreen
                style={{
                  border: 'none',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Card>
          </div>
        ))}
      </div>
      
      {/* Last video centered */}
      <div className="mt-4 flex justify-center">
        <div className="w-full max-w-sm aspect-[9/16] relative">
          <Card className="w-full h-full overflow-hidden">
            <iframe
              src={`${videos[6].url}?autoplay=0&controls=1`}
              className="w-full h-full absolute inset-0"
              allowFullScreen
              style={{
                border: 'none',
                width: '100%',
                height: '100%',
              }}
            />
          </Card>
        </div>
      </div>
    </div>
  )
}
