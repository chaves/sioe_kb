<script lang="ts">
  import Error from "$lib/ui/forms/Error.svelte";
  export let options;
  export let name: string;
  export let text: string;
  export let error: undefined | string | unknown;
  export let value: number | string;

  let options_for_select = [
    { code: "", name: "Please select ..." },
    ...options,
  ];
</script>

<div class="mt-6">
  <label for={name}
    >{text}
    <select {name}>
      {#each options_for_select as item}
        {#if item.code == value}
          <option value={item.code} selected>{item.name}</option>
        {:else}
          <option value={item.code}>{item.name}</option>
        {/if}
      {/each}
    </select>
    <Error {error} />
  </label>
</div>
