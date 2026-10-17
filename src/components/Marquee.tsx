import { Fragment } from 'react'
import { MARQUEE_WORDS } from '../data/content'

export function Marquee() {
  return (
    <div className="mq">
      <div>
        {Array.from({ length: 4 }, (_, i) =>
          MARQUEE_WORDS.map((w) => (
            <Fragment key={`${i}-${w}`}>
              <span>{w}</span>
              <span><em>✦</em></span>
            </Fragment>
          )),
        )}
      </div>
    </div>
  )
}
