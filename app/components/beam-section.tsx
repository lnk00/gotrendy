import { type RefObject, useRef } from "react";
import { AnimatedBeam } from "./ui/animated-beam";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AnimatedList } from "./ui/animated-list";

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

function LinkedinPost() {
	return (
		<div className="w-full border rounded-lg p-4 relative [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]">
			<div className="flex gap-2 items-start">
				<Avatar>
					<AvatarImage src="assets/images/avatar.png" alt="avatar" />
				</Avatar>
				<div className="flex flex-col">
					<span className="font-semibold leading-4">Damien Dumontet</span>
					<span className="opacity-50 text-sm leading-4">
						Software engineer
					</span>
				</div>
			</div>
			<div className="leading-6 mt-4">
				If you're a software engineer you know this feeling. Here is 5 tricks to
				fix your mood...👇
			</div>
			<div className="leading-6 text-sm opacity-50 absolute bottom-4 right-6 cursor-pointer">
				...more
			</div>
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
	const ideaBlogRef = useRef<HTMLDivElement>(null);

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
			<div className="w-full mt-24 flex gap-8 px-24 items-start">
				<div className="z-10 flex flex-col gap-4 w-full items-center justify-center">
					<div
						className="size-3 border-2 bg-white rounded-full"
						ref={ideaLinkedinRef}
					/>
					<div className="font-semibold text-lg">Linkedin posts</div>
					<div className="relative w-full h-[370px] overflow-hidden">
						<AnimatedList delay={2000}>
							{Array.from({ length: 5 }, () => {})
								.flat()
								.map((_, idx) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<LinkedinPost key={idx} />
								))}
						</AnimatedList>
						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
					</div>
				</div>
				<div className="z-10 flex flex-col gap-4 w-full items-center justify-center">
					<div
						className="size-3 border-2 bg-white rounded-full"
						ref={ideaBlogRef}
					/>
					<div className="font-semibold text-lg">Blog posts</div>
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
				toRef={ideaBlogRef}
				duration={2}
			/>
		</div>
	);
}
