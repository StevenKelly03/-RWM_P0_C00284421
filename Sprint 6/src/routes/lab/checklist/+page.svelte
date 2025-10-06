<h1 data-testid="title">Progress Checklist</h1>

<script>
  import ChecklistItem from '$lib/ChecklistItem.svelte';
  let item = { id: 1, label: 'Test Item', done: false };
  let counter = 0;

  function handleChange(event) 
  {
    item.done = event.detail.done;
    counter += 1;
  }
</script>

<ChecklistItem {...item} on:change={handleChange} />
<p>Toggle count: {counter}</p>
