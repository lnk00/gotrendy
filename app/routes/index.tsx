import { DotPattern } from "@/components/ui/dot-pattern";
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
			<div className="border-b relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden">
				<DotPattern
					className={cn(
						"[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
					)}
				/>
				<TextAnimate
					as={"h1"}
					className="font-bold text-6xl"
					animation="blurInDown"
					by="character"
					delay={0.5}
					duration={0.5}
				>
					Your trendy idea machine
				</TextAnimate>
				<TextAnimate
					as={"h2"}
					className="text-2xl max-w-1/2 text-center mt-8 font-medium text-muted-foreground"
					animation="blurInUp"
					by="character"
					delay={0.5}
					duration={0.5}
				>
					Get personalized content ideas, powered by your
				</TextAnimate>
				<TextAnimate
					as={"h2"}
					className="text-2xl max-w-1/2 text-center font-medium text-muted-foreground"
					animation="blurInUp"
					by="character"
					delay={0.5}
					duration={0.5}
				>
					browsing and social feeds.
				</TextAnimate>
			</div>
		</div>
	);
}
