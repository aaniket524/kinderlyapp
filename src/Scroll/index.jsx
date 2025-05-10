import { useLenis } from 'lenis/react'

export default function ScrollTester() {
  const lenis = useLenis()

  return (
    <button
      onClick={() => lenis.scrollTo(10000)}
      style={{ position: 'fixed', bottom: 20, right: 20 }}
    >
      Scroll to 1000px
    </button>
  )
}
