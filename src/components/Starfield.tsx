import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    twinkleSpeed: number;
    twinkleOffset: number;
}

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create static stars - more dispersed and smaller
        const stars: Star[] = [];
        const numStars = 150; // Reduced number for more sparse look

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.5, // Smaller stars: 0.5-2px
                opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8 opacity
                twinkleSpeed: Math.random() * 0.02 + 0.005, // Very slow twinkle
                twinkleOffset: Math.random() * Math.PI * 2,
            });
        }

        // Animation loop for subtle twinkling
        let animationId: number;
        let frame = 0;

        const animate = () => {
            // Clear canvas with pure black
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            frame++;

            // Draw stars with subtle twinkling
            stars.forEach((star) => {
                // Subtle twinkle effect
                const twinkle = Math.sin(frame * star.twinkleSpeed + star.twinkleOffset) * 0.2;
                const currentOpacity = Math.max(0.2, Math.min(1, star.opacity + twinkle));

                // Draw star as a simple white dot
                ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Add very subtle glow only to larger stars
                if (star.size > 1.2 && currentOpacity > 0.6) {
                    ctx.shadowBlur = 3;
                    ctx.shadowColor = `rgba(255, 255, 255, ${currentOpacity * 0.3})`;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                background: '#000000',
            }}
        />
    );
}
