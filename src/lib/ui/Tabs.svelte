<script>
	export let tab_1
	export let tab_2
	export let tab_3 = ''

	let openTab = 1;

	function toggleTabs(tabNumber) {
		openTab = tabNumber;
	}
</script>

<div class="flex flex-wrap">
	<div class="w-full">
		<ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<button
					class="{openTab ===
					1
						? 'text-white bg-red-600'
						: 'text-red-600 bg-white'}"
					on:click={() => toggleTabs(1)}
				>
					{tab_1}
				</button>
			</li>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<button
					class="{openTab ===
					2
						? 'text-white bg-red-600'
						: 'text-red-600 bg-white'}"
					on:click={() => toggleTabs(2)}
				>
					{tab_2}
				</button>
			</li>
			{#if tab_3 !== ''}
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<button
					class="{openTab ===
					3
						? 'text-white bg-red-600'
						: 'text-red-600 bg-white'}"
					on:click={() => toggleTabs(3)}
				>
					{tab_3}
				</button>
			</li>
			{/if}
		</ul>
		<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
			<div class="px-4 py-5 flex-auto">
				<div class="tab-content tab-space">
					<div class={openTab === 1 ? 'block' : 'hidden'}>
						<slot name="tab_1_content" />
					</div>
					<div class={openTab === 2 ? 'block' : 'hidden'}>
						<slot name="tab_2_content" />
					</div>
					{#if tab_3 !== ''}
						<div class={openTab === 3 ? 'block' : 'hidden'}>
							<slot name="tab_3_content" />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	button {
		@apply text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal w-full
	}
</style>