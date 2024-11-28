<script>
    import CartaMagic from '$lib/components/CartaMagic.svelte';
    import { cards } from '$lib/data.js';
</script>

<div class="row g-4">
    {#each cards as card}
        <div class="col">
            <CartaMagic {...card} />
        </div>
    {/each}
</div>
