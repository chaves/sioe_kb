<script>
	export let title;
	export let title_link;
	export let directory_path;
	export let directory_name;

	if (title_link === undefined) {
		title_link = title
	}

	import { fadeIn, fadeOut } from "$utilities/fadeEffects.js";

</script>

<section class="py-6 bg-blueGray-100">
	<div class="container text-center">
		<h1
			class="text-2xl lg:text-3xl font-bold mb-5 wow animate__animated animate__fadeInUp animated"
			in:fadeIn out:fadeOut
		>
			{@html title }
		</h1>
		<ul
			class="mx-auto text-gray-500 text-sm lg:text-sm wow animate__animated animate__fadeInUp animated"
		>
			<li class="inline-flex items-center">
				<a href="/" class="hover:text-blue-500 text-gray-800">Home</a>
				<svg fill="currentColor" viewBox="0 0 20 20" class="h-5 w-auto text-gray-300">
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</li>
			{#if directory_name}
			<li class="inline-flex items-center">
				<a href="/{directory_path}" class="hover:text-blue-500 text-gray-800">{directory_name}</a>
				<svg fill="currentColor" viewBox="0 0 20 20" class="h-5 w-auto text-gray-300">
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</li>
			{/if}

			<li class="inline-flex items-center text-gray-400">
				<span>{ title_link }</span>
			</li>
		</ul>
	</div>
</section>