import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";
import type { Post } from "$lib/types";

const get_post_list = async (): Promise<Post[]> => {
	const res = await fetch(`${env.API_URL}/api/posts`, { method: "GET" });
	return (await res.json()) as Post[];
};

export const load: PageServerLoad = async () => {
	return {
		post_list: get_post_list()
	};
};
