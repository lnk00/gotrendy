import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/" as never)({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="m-auto border-x max-w-[1200px] h-screen">
			<div className="border-b h-24 p-12 flex items-center">
				<h1 className="font-bold text-xl">gotrendy</h1>
			</div>
			<div className="border-b relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
				<DotPattern
					className={cn(
						"[mask-image:radial-gradient(1500px_circle_at_center,transparent,white)]",
					)}
				/>
				<TextAnimate
					as={"h1"}
					className="font-bold text-6xl"
					animation="blurInDown"
					by="character"
					duration={0.5}
				>
					The content engine for modern creators
				</TextAnimate>
				<TextAnimate
					as={"h2"}
					className="text-2xl max-w-1/2 text-center mt-8 font-medium text-muted-foreground"
					animation="blurInUp"
					by="character"
					duration={0.5}
				>
					Get personalized content ideas, powered by your
				</TextAnimate>
				<TextAnimate
					as={"h2"}
					className="text-2xl max-w-1/2 text-center font-medium text-muted-foreground"
					animation="blurInUp"
					by="character"
					duration={0.5}
				>
					browsing and social feeds.
				</TextAnimate>
				<BlurFade delay={0.5} duration={0.5}>
					<InteractiveHoverButton className="mt-8">
						Get started now
					</InteractiveHoverButton>
				</BlurFade>
			</div>
			<div className="border-b relative flex h-[180px] w-full flex-col items-center justify-center overflow-hidden bg-blue-600">
				<span className="font-bold text-4xl max-w-1/2 text-center text-white">
					Stay inspired with topics that truly resonate with your audience.
				</span>
			</div>
		</div>
	);
}
