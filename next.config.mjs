import MillionLint from "@million/lint";
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["placehold.co", "datawomb.com"],
	},
};
export default MillionLint.next({
	rsc: true,
})(nextConfig);
