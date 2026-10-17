import type { MediaItem } from '../data/media'
import { Art } from './Art'

/** Renders either a photo or a generated glass illustration; both fill their container. */
export function Media({ item, eager = false }: { item: MediaItem; eager?: boolean }) {
  if (item.kind === 'art') return <Art kind={item.art} tone={item.tone} label={item.alt} />
  return (
    <img
      src={item.src}
      alt={item.alt}
      width={item.w}
      height={item.h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
