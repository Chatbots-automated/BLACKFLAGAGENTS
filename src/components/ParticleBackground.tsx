import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
      rotation: number;
      rotationSpeed: number;
    }

    const particles: Particle[] = [];
    const colors = ['#6366f1', '#8b5cf6', '#d946ef', '#4f46e5'];

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: 0,
      pulseSpeed: (Math.random() * 0.02 + 0.01) * (Math.random() < 0.5 ? 1 : -1),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02
    });

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 + rotation;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const connectParticles = (p1: Particle, p2: Particle) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;

      if (distance < maxDistance) {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        
        const getColorWithOpacity = (color: string, opacity: number) => {
          const r = parseInt(color.slice(1, 3), 16);
          const g = parseInt(color.slice(3, 5), 16);
          const b = parseInt(color.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${opacity * (1 - distance / maxDistance)})`;
        };

        gradient.addColorStop(0, getColorWithOpacity(p1.color, p1.opacity + p1.pulse));
        gradient.addColorStop(1, getColorWithOpacity(p2.color, p2.opacity + p2.pulse));
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulse += particle.pulseSpeed;
        particle.rotation += particle.rotationSpeed;

        if (particle.pulse > 0.2 || particle.pulse < -0.2) {
          particle.pulseSpeed *= -1;
        }

        // Bounce off edges with some randomization
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
          particle.speedX += (Math.random() - 0.5) * 0.1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
          particle.speedY += (Math.random() - 0.5) * 0.1;
        }

        // Draw hexagonal particle with rotation
        ctx.save();
        const r = parseInt(particle.color.slice(1, 3), 16);
        const g = parseInt(particle.color.slice(3, 5), 16);
        const b = parseInt(particle.color.slice(5, 7), 16);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity + particle.pulse})`;
        drawHexagon(ctx, particle.x, particle.y, particle.size * (1 + Math.abs(particle.pulse)), particle.rotation);
        ctx.fill();
        ctx.restore();

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
          connectParticles(particle, particles[j]);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
};

export default ParticleBackground;