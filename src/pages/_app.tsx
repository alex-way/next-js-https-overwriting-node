import { AppProps } from "next/app";

console.log(process.env.NODE_EXTRA_CA_CERTS);

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return <Component {...pageProps} />;
}
