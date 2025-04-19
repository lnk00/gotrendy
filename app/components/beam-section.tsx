import { useRef } from "react";
import { AnimatedBeam } from "./ui/animated-beam";

export function BeamSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const linkedinRef = useRef<HTMLDivElement>(null);
	const titokRef = useRef<HTMLDivElement>(null);
	const googleRef = useRef<HTMLDivElement>(null);
	const youtubeRef = useRef<HTMLDivElement>(null);
	const redditRef = useRef<HTMLDivElement>(null);
	const trendloRef = useRef<HTMLDivElement>(null);
	const ideaLinkedinRef = useRef<HTMLDivElement>(null);
	const ideaYoutubeRef = useRef<HTMLDivElement>(null);
	const ideaTiktokRef = useRef<HTMLDivElement>(null);

	return (
		<div
			className="flex flex-col items-center justify-center relative pb-56"
			ref={containerRef}
		>
			<div className="flex gap-16 items-center justify-center">
				<div
					className="z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] mt-56"
					ref={linkedinRef}
				>
					<img src="assets/images/linkedin.svg" alt="" />
				</div>
				<div
					className="z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] mt-16"
					ref={titokRef}
				>
					<img src="assets/images/tiktok.svg" alt="" />
				</div>
				<div
					className="z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
					ref={googleRef}
				>
					<img src="assets/images/google.svg" alt="" />
				</div>
				<div
					className="z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] mt-16"
					ref={youtubeRef}
				>
					<img src="assets/images/youtube.svg" alt="" />
				</div>
				<div
					className="z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] mt-56"
					ref={redditRef}
				>
					<img src="assets/images/reddit.svg" alt="" />
				</div>
			</div>
			<div
				className="z-10 flex size-25 items-center justify-center rounded-full border-2 bg-white p-5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] mt-2"
				ref={trendloRef}
			>
				<span className="font-bold text-lg">trendlo</span>
			</div>
			<div className="w-full mt-24 flex gap-8 px-8">
				<div className="z-10 flex flex-col gap-4 w-full items-center justify-center">
					<div
						className="size-3 border-2 bg-white rounded-full"
						ref={ideaLinkedinRef}
					/>
					<div className="font-semibold text-lg">Linkedin posts</div>
				</div>
				<div className="z-10 flex flex-col gap-4 w-full items-center justify-center">
					<div
						className="size-3 border-2 bg-white rounded-full"
						ref={ideaYoutubeRef}
					/>
					<div className="font-semibold text-lg">Youtube videos</div>
				</div>
				<div className="z-10 flex flex-col gap-4 w-full items-center justify-center">
					<div
						className="size-3 border-2 bg-white rounded-full"
						ref={ideaTiktokRef}
					/>
					<div className="font-semibold text-lg">TikTok videos</div>
				</div>
			</div>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={linkedinRef}
				toRef={trendloRef}
				duration={7}
				delay={1}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={titokRef}
				toRef={trendloRef}
				duration={7}
				delay={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={googleRef}
				toRef={trendloRef}
				duration={7}
				delay={2.2}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={youtubeRef}
				toRef={trendloRef}
				duration={7}
				delay={5}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={redditRef}
				toRef={trendloRef}
				duration={7}
				delay={2}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={trendloRef}
				toRef={ideaLinkedinRef}
				duration={3}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={trendloRef}
				toRef={ideaYoutubeRef}
				duration={5}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={trendloRef}
				toRef={ideaTiktokRef}
				duration={2}
			/>
		</div>
	);
}
