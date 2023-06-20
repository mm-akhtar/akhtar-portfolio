import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';

class SupahBlob {
	constructor(obj) {
		if (!obj.el) return;

		this.el = obj.el;
		this.segments = obj.segments || 8;
		this.centerX = obj.centerX || 400;
		this.centerY = obj.centerY || 400;
		this.minRadius = obj.minRadius || 300;
		this.maxRadius = obj.maxRadius || 380;
		this.minDuration = obj.minDuration || 1;
		this.maxDuration = obj.maxDuration || 2;
		this.maskEl = obj.maskEl || null;
		this.maskID = obj.maskID || null;

		this.init();
	}

	init() {
		this.points = [];
		const slice = (Math.PI * 2) / this.segments;
		const tl = gsap.timeline({
			onUpdate: () => {
				this.update();
			},
		});

		for (let i = 0; i < this.segments; i++) {
			const angle = slice * i;
			const duration = gsap.utils.random(this.minDuration, this.maxDuration);

			const p = {
				x: this.centerX + Math.cos(angle) * this.minRadius,
				y: this.centerX + Math.sin(angle) * this.minRadius,
			};

			const tween = gsap.to(p, {
				duration,
				x: this.centerX + Math.cos(angle) * this.maxRadius,
				y: this.centerX + Math.sin(angle) * this.maxRadius,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true,
			});
			tl.add(tween, -duration);
			this.points.push(p);
		}
	}

	update() {
		this.el.setAttribute('d', this.createPath());

		// Force clipPath update
        if ( this.maskEl ) {
            if ( this.maskEl.style ) { 
                this.maskEl.style.clipPath = 'none';
                this.maskEl.style.webkitClipPath = 'none';
                this.maskEl.offsetWidth;
                this.maskEl.style.clipPath = `url("${this.maskID}")`;
                this.maskEl.style.webkitClipPath = `url("${this.maskID}")`;
            }
		}
	}

	createPath() {
		const data = this.points;
		const size = this.points.length;

		let path = `M${data[0].x} ${data[0].y} C`;

		for (let i = 0; i < size; i++) {
			const p0 = data[(i - 1 + size) % size];
			const p1 = data[i];
			const p2 = data[(i + 1) % size];
			const p3 = data[(i + 2) % size];

			const x1 = p1.x + (p2.x - p0.x) * 0.15;
			const y1 = p1.y + (p2.y - p0.y) * 0.15;
			const x2 = p2.x - (p3.x - p1.x) * 0.15;
			const y2 = p2.y - (p3.y - p1.y) * 0.15;

			path += ` ${x1} ${y1} ${x2} ${y2} ${p2.x} ${p2.y}`;
		}

		return `${path}z`;
	}
}

const MyComponent = () => {
	const path1Ref = useRef(null);
	const path2Ref = useRef(null);
	const carouselImagesRef = useRef(null);

	useEffect(() => {
		const blob1 = new SupahBlob({
			el: path1Ref.current,
			segments: 9,
			centerX: 400,
			centerY: 400,
			minRadius: 300,
			maxRadius: 380,
			minDuration: 1,
			maxDuration: 3,
			maskEl: carouselImagesRef.current,
			maskID: '#mask',
		});

		const blob2 = new SupahBlob({
			el: path2Ref.current,
			segments: 9,
			centerX: 400,
			centerY: 400,
			minRadius: 320,
			maxRadius: 400,
			minDuration: 2,
			maxDuration: 3,
		});
	}, []);

	const handlePlayClick = () => {
		const slides = carouselImagesRef.current.querySelectorAll('.carousel--images img');
		let active = 0;

		slides[active].classList.remove('active');
		active = active < slides.length - 1 ? active + 1 : 0;
		slides[active].classList.add('active');
	};

	return (
		<div className='carousel'>
			<svg id='blob-1' viewBox='0 0 800 800' className='home__blob'>
				<defs>
					<clipPath id='mask'>
						<path ref={path1Ref} />
					</clipPath>
				</defs>
				<path id='path-2' ref={path2Ref} />
			</svg>
			<div className='carousel--images' ref={carouselImagesRef}>
				<img className='active' src='/img/Subject.png' />
			</div>
		</div>
	);
};

export default MyComponent;
