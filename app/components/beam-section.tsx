import { type RefObject, useRef } from "react";
import { AnimatedBeam } from "./ui/animated-beam";
import { cn } from "@/lib/utils";

type IPropsSocialFeed = {
	ref: RefObject<HTMLDivElement | null>;
	img: string;
	className?: string;
};

function SocialFeed({ ref, img, className }: IPropsSocialFeed) {
	return (
		<div
			className={cn(
				"z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className,
			)}
			ref={ref}
		>
			<img src={img} alt="" />
		</div>
	);
}

export function BeamSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const linkedinRef = useRef<HTMLDivElement>(null);
	const tiktokRef = useRef<HTMLDivElement>(null);
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
				<SocialFeed
					ref={linkedinRef}
					img="assets/images/linkedin.svg"
					className="mt-56"
				/>
				<SocialFeed
					ref={tiktokRef}
					img="assets/images/tiktok.svg"
					className="mt-16"
				/>
				<SocialFeed ref={googleRef} img="assets/images/google.svg" />
				<SocialFeed
					ref={youtubeRef}
					img="assets/images/youtube.svg"
					className="mt-16"
				/>
				<SocialFeed
					ref={redditRef}
					img="assets/images/reddit.svg"
					className="mt-56"
				/>
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
				fromRef={tiktokRef}
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
