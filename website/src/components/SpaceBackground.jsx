import React, { useEffect, useRef } from 'react';

export default function SpaceBackground() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays smoothly in HD
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      videoRef.current.play().catch(() => {
        // Fallback if browser requires interaction
      });
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };
    window.addEventListener('resize', handleResize);

    // Mouse parallax tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Star configuration
    const STAR_COUNT = Math.min(Math.floor((width * height) / 6000), 160);
    let stars = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        const layer = Math.random();
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: layer < 0.7 ? Math.random() * 0.8 + 0.3 : Math.random() * 1.5 + 0.8,
          baseAlpha: Math.random() * 0.6 + 0.3,
          alpha: Math.random() * 0.6 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          speed: (layer * 0.15 + 0.03),
          layer: layer,
          color: layer > 0.85 
            ? (Math.random() > 0.5 ? '#00F5FF' : '#F59E0B')
            : (Math.random() > 0.8 ? '#FDE68A' : '#FFFFFF'),
          flare: layer > 0.94
        });
      }
    };

    initStars();

    // Shooting Meteors
    let meteors = [];
    const createMeteor = () => {
      const startX = Math.random() * width * 1.2;
      const startY = Math.random() * (height * 0.35);
      const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
      const speed = Math.random() * 8 + 12;
      const length = Math.random() * 120 + 80;

      meteors.push({
        x: startX,
        y: startY,
        length: length,
        speed: speed,
        angle: angle,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        alpha: 1,
        fadeSpeed: Math.random() * 0.015 + 0.01,
        width: Math.random() * 1.5 + 1.2,
      });
    };

    let meteorTimer = 0;

    // Realistic Moon Configuration
    const drawMoon = (time) => {
      const moonX = width > 768 ? width * 0.84 : width * 0.86;
      const moonY = height * 0.14 + Math.sin(time * 0.0008) * 8;
      const moonRadius = width > 768 ? 54 : 36;

      ctx.save();

      // 1. Moon Atmospheric Glow matching accretion disc palette
      const glowGrad = ctx.createRadialGradient(
        moonX, moonY, moonRadius * 0.8,
        moonX, moonY, moonRadius * 3.5
      );
      glowGrad.addColorStop(0, 'rgba(0, 245, 255, 0.2)');
      glowGrad.addColorStop(0.3, 'rgba(245, 158, 11, 0.1)');
      glowGrad.addColorStop(0.7, 'rgba(139, 92, 246, 0.03)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius * 3.5, 0, Math.PI * 2);
      ctx.fill();

      // 2. Moon Body
      const moonGrad = ctx.createRadialGradient(
        moonX - moonRadius * 0.35, moonY - moonRadius * 0.35, moonRadius * 0.1,
        moonX, moonY, moonRadius
      );
      moonGrad.addColorStop(0, '#FFFFFF');
      moonGrad.addColorStop(0.25, '#E2E8F0');
      moonGrad.addColorStop(0.55, '#CBD5E1');
      moonGrad.addColorStop(0.85, '#64748B');
      moonGrad.addColorStop(1, '#1E293B');

      ctx.fillStyle = moonGrad;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Moon Craters
      ctx.save();
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.clip();

      const craters = [
        { x: -0.2, y: -0.15, r: 0.24, opacity: 0.18 },
        { x: 0.15, y: -0.3, r: 0.18, opacity: 0.15 },
        { x: 0.3, y: 0.1, r: 0.22, opacity: 0.2 },
        { x: 0.1, y: 0.35, r: 0.26, opacity: 0.22 },
        { x: -0.35, y: 0.2, r: 0.16, opacity: 0.16 },
      ];

      craters.forEach(crater => {
        const cx = moonX + crater.x * moonRadius;
        const cy = moonY + crater.y * moonRadius;
        const cr = crater.r * moonRadius;

        const craterGrad = ctx.createRadialGradient(cx, cy, cr * 0.2, cx, cy, cr);
        craterGrad.addColorStop(0, `rgba(30, 41, 59, ${crater.opacity * 1.2})`);
        craterGrad.addColorStop(0.7, `rgba(51, 65, 85, ${crater.opacity})`);
        craterGrad.addColorStop(1, 'rgba(71, 85, 105, 0)');

        ctx.fillStyle = craterGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, cr, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Subtle Lunar Shadow
      const shadowGrad = ctx.createLinearGradient(
        moonX - moonRadius, moonY - moonRadius,
        moonX + moonRadius, moonY + moonRadius
      );
      shadowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      shadowGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
      shadowGrad.addColorStop(1, 'rgba(10, 10, 15, 0.55)');

      ctx.fillStyle = shadowGrad;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // 5. Rim Halo
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
    };

    // Render loop
    const render = (time) => {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      const mouseOffsetX = (mouseX - width / 2) * 0.02;
      const mouseOffsetY = (mouseY - height / 2) * 0.02;

      ctx.clearRect(0, 0, width, height);

      // Draw Moon
      drawMoon(time);

      // Render Stars
      stars.forEach(star => {
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        star.alpha = star.baseAlpha + Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3;
        star.alpha = Math.max(0.1, Math.min(1, star.alpha));

        const renderX = star.x + mouseOffsetX * star.layer;
        const renderY = star.y + mouseOffsetY * star.layer;

        ctx.save();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.radius, 0, Math.PI * 2);
        ctx.fill();

        if (star.flare && star.alpha > 0.6) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          const flareLen = star.radius * 3.5;
          ctx.moveTo(renderX - flareLen, renderY);
          ctx.lineTo(renderX + flareLen, renderY);
          ctx.moveTo(renderX, renderY - flareLen);
          ctx.lineTo(renderX, renderY + flareLen);
          ctx.stroke();
        }

        ctx.restore();
      });

      // Update & Render Meteors
      meteorTimer += 1;
      if (meteorTimer > 180 && Math.random() < 0.02) {
        createMeteor();
        meteorTimer = 0;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.dx;
        m.y += m.dy;
        m.alpha -= m.fadeSpeed;

        if (m.alpha <= 0 || m.x > width + 200 || m.y > height + 200) {
          meteors.splice(i, 1);
          continue;
        }

        ctx.save();
        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const meteorGrad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        meteorGrad.addColorStop(0, 'rgba(0, 245, 255, 0)');
        meteorGrad.addColorStop(0.6, `rgba(245, 158, 11, ${m.alpha * 0.4})`);
        meteorGrad.addColorStop(0.9, `rgba(0, 245, 255, ${m.alpha * 0.8})`);
        meteorGrad.addColorStop(1, `rgba(255, 255, 255, ${m.alpha})`);

        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = m.width;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = m.alpha;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.width * 1.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* 1. Full HD Cinematic Space Video Wallpaper with high fidelity */}
      <video
        ref={videoRef}
        src="/assets/space-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover opacity-90 filter brightness-[0.82] contrast-110"
      />

      {/* 2. Seamless Ambient Color Accent Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/50 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,245,255,0.08),transparent)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_60%,rgba(245,158,11,0.06),transparent)] pointer-events-none" />

      {/* 3. Celestial Starfield & Moon Canvas Overlay */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full block opacity-90 pointer-events-none"
      />
    </div>
  );
}
