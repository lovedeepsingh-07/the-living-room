import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";
import type { Post } from "$lib/types";
import { render_content } from "$lib";

const get_post = async (slug: string): Promise<Post> => {
	const res = await fetch(`${env.API_URL}/api/posts/${slug}`, { method: "GET" });
	let data = (await res.json()) as Post;
	data.content = await render_content(data.content);
	return data;
};

export const load: PageServerLoad = async (load_event) => {
	const { post_slug } = load_event.params;
	return {
		post: get_post(post_slug)
	};
};
