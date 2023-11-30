declare module "varhub-modules:*" {
	import {ModuleDescription} from "@flinbein/varhub-ws-client";
	export const modules: Record<string, ModuleDescription>;
	export const integrity: string;
}

declare module "varhub-modules-integrity:*" {
	const integrity: string
	export default integrity;
}