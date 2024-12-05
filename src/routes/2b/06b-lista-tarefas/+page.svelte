<script>
    const tarefas = $state([]);
    let tarefa = $state();
</script>

<h2>Tarefas a fazer</h2>
<input placeholder="Tarefa..." bind:value={tarefa} />
<button onclick={() => tarefas.push(tarefa)}>+</button>
<ul>
    {#each tarefas as tarefa, i}
        <li>{tarefa} (<a href="#/" onclick={() => tarefas.splice(i, 1)}>🗑</a>)</li>
    {/each}
</ul>
