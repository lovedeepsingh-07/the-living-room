<script lang="ts">
	import { title, description } from "$lib/config";
	import type { PageProps } from "./$types";
	import type { Post } from "$lib/types";

	const { data }: PageProps = $props();
</script>

<h1 class="text-4xl">{title}</h1>
<h3 class="text-lg">{description}</h3>

{#await data.post_list}
	<p>loading...</p>
{:then post_list: Post[]}
	{@const _ = console.log(post_list)}
	<div class="mt-[20px] flex flex-col items-start text-lg">
		{#each post_list as curr_post: Post}
			<a class="decoration-gray-500 hover:underline" href={`/posts/${curr_post.slug}`}>
				{curr_post.date} - {curr_post.title}
			</a>
		{/each}
	</div>
{/await}
