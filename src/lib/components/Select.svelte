<script lang="ts">
	export let options;
	export let name;
</script>

<select
	id="countries"
	class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
	{name}
>
	{#each options as option}
		<option value={option['value']}>{option['label']}</option>
	{/each}
</select>
