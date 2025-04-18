import { DotPattern } from "@/components/ui/dot-pattern";
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
					glow={true}
					className={cn(
						"[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
					)}
				/>
				<h1 className="font-bold text-6xl">Your trendy idea machine</h1>
			</div>
		</div>
	);
}
