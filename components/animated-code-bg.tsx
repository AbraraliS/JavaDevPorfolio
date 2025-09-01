"use client"

import { useEffect, useRef } from "react"

export function AnimatedCodeBg() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let frame = 0
    const symbols = "{}[]();<>=+-*/%"
    const dpi = Math.max(1, window.devicePixelRatio || 1)

    function resize() {
      canvas.width = canvas.clientWidth * dpi
      canvas.height = canvas.clientHeight * dpi
      ctx.scale(dpi, dpi)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    function draw() {
      frame++
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = "rgba(99, 102, 241, 0.08)" // deep blue glow: sky-600-ish
      for (let i = 0; i < 80; i++) {
        const x = (i * 37 + ((frame * 0.6) % width)) % width
        const y = (i * 47 + frame * 1.1) % height
        const ch = symbols[i % symbols.length]
        ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, monospace"
        ctx.fillText(ch, x, y)
      }
      requestAnimationFrame(draw)
    }
    draw()
    return () => ro.disconnect()
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <canvas ref={ref} className="h-full w-full opacity-70" aria-hidden />
      {/* subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
    </div>
  )
}
