import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/" as never)({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center gap-8">
			<div className="text-9xl">Hello world!</div>
			<Button className="rounded-full" size={"lg"}>
				Button
			</Button>
		</div>
	);
}
