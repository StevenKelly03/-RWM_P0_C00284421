<script lang="ts">
  import ChecklistItem from '$lib/ChecklistItem.svelte';
  import { itemsStore, completedStore, percentStore, type Item } from '../stores';
  $: items = $itemsStore as Item[]; 
  
  let completedCount = 0; 
  $: itemsTotal = items.length; 
  let percentComplete = 0;
  function handleSubmit() {
    completedCount = $completedStore;
    percentComplete = $percentStore;
  }
</script>

<h2>Checklist Progress</h2>

<ul>
  {#each items as item}
    <li>
      <ChecklistItem
        id={item.id}
        label={item.label}
        done={item.done} 
      />
    </li>
  {/each}
</ul>

<p data-testid="progress-summary">
  Completed: {completedCount}/{itemsTotal} 
  ({percentComplete}%)
</p>

<button on:click={handleSubmit} data-testid="submit-button">Submit version</button>