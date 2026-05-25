<script lang="ts">
	import "./layout.css";
	import { title, description, favicon } from "$lib/config";
	import { ModeWatcher } from "mode-watcher";
	import type { LayoutProps } from "./$types";

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="icon" href={favicon} />
	<meta name="description" content={description} />
</svelte:head>

<ModeWatcher defaultMode={"dark"} />

<div class="mx-auto mt-[32px] w-full max-w-[78%]">
	{@render children()}
</div>
