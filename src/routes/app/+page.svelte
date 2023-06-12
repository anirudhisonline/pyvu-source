<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import sdk from "$lib/appwrite.js";
	import { onMount,afterUpdate } from "svelte";
    
	import { invalidate , invalidateAll,goto } from '$app/navigation';
    let value=data.value;
    onMount(async()=>{
        setInterval(()=>{
            data.tevents=data.tevents;
            invalidate('/app');
        }, 100);
        
    })
</script>


    <div class="min-h-[85dvh] flex flex-col items-center justify-center">
        {'Welcome ' + value.name}
        <p> Create a new event <span><a href="./app/create">here</a></span></p>
        <div class="mt-4">
            <p class="font-bold">Your events</p>
            {#each data.events as item}
            <div class="card card-side bg-base-100 shadow-xl m-4">
                {#if item.img==undefined}
                    <figure><img src="https://placehold.co/200" alt="Movie"/></figure>
                {:else}
                    <figure><img src={item.img} alt="Movie"/></figure>
                {/if}
                
                <div class="card-body">
                  <h2 class="card-title">{item.name}</h2>
                  <p>{item.desc}</p>
                  <div class="card-actions justify-end">
                    <a href="/app/{item.$id}" class="btn btn-primary">View</a>
                  </div>
                </div>
                </div>
                {/each}
        </div>

        <div class="mt-4">
            <p class="font-bold">You are a part of these events</p>
            {#each data.tevents as item}
                 
            
            <div class="card card-side bg-base-100 shadow-xl m-4">
                {#if item.img==undefined}
                    <figure><img src="https://placehold.co/200" alt="Movie"/></figure>
                {:else}
                    <figure class="w-[200px]"><img src={item.img} alt=""/></figure>
                {/if}
                
                <div class="card-body">
                  <h2 class="card-title">{item.name}</h2>
                  <p>{item.desc}</p>
                  <div class="card-actions justify-end">
                    <a href="/app/{item.$id}" class="btn btn-primary">View</a>
                  </div>
                </div>
                </div>
                {/each}
        </div>
    </div>

    
    