<script>
  import { cards } from '$lib/data.js';
</script>

<div class="row g-4">
  {#each cards as card}
    <div class="col">
      <div class="card h-100" style="width: 18rem;">
        <img src={card.img} class="card-img-top" alt="invisibility" width="200px" />
        <div class="card-body">
          <h5 class="card-title">{card.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{card.type}</h6>
          <p class="card-text">{card.text}</p>
        </div>
      </div>
    </div>
  {/each}
</div>
