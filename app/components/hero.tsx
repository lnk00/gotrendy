import { DotPattern } from "@/components/ui/dot-pattern";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";

export function Hero() {
	return (
		<div className="border-b relative flex h-[480px] w-full flex-col items-center justify-center overflow-hidden">
			<DotPattern
				className={cn(
					"[mask-image:radial-gradient(1200px_circle_at_center,transparent,white)]",
				)}
			/>
			<h1 className="font-bold text-6xl">
				The content engine for modern creators
			</h1>
			<h2 className="text-2xl max-w-1/2 text-center mt-8 font-medium text-muted-foreground">
				Get personalized content ideas, powered by your browsing and social
				feeds.
			</h2>
			<InteractiveHoverButton className="mt-8">
				Get started now
			</InteractiveHoverButton>
		</div>
	);
}
