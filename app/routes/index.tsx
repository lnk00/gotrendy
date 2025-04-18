import { DotPattern } from "@/components/ui/dot-pattern";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
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
				<h1 className="font-bold text-6xl">
					The content engine for modern creators
				</h1>
				<h2 className="text-2xl max-w-1/2 text-center mt-8 font-medium text-muted-foreground">
					Get personalized content ideas, powered by your
				</h2>
				<h2 className="text-2xl max-w-1/2 text-center font-medium text-muted-foreground">
					browsing and social feeds.
				</h2>
				<InteractiveHoverButton className="mt-8">
					Get started now
				</InteractiveHoverButton>
			</div>
			<div className="border-b relative flex h-[180px] w-full flex-col items-center justify-center overflow-hidden bg-primary">
				<span className="font-bold text-4xl max-w-1/2 text-center text-white">
					Stay inspired with topics that truly resonate with your audience.
				</span>
			</div>
		</div>
	);
}
