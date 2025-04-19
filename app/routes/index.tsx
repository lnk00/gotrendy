import { BeamSection } from "@/components/beam-section";
import { BoldTextSection } from "@/components/bold-text-section";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/" as never)({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="m-auto border-x max-w-[1200px]">
			<Nav />
			<Hero />
			<BoldTextSection />
			<BeamSection />
		</div>
	);
}
