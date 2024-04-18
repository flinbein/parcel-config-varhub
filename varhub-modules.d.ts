declare module "varhub-modules:*" {
	export const roomModule: { main: string, source: Record<string, string>};
	export const roomIntegrity: string;
}

declare module "varhub-modules-integrity:*" {
	const integrity: string
	export default integrity;
}