<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    var d = new Date(data.res?.date);
    let base64url,blod,file;
    onMount(async()=>{
    base64url = data.res?.img;
    blob = await (await fetch(base64url)).blob();
    file = new File([blob], data.res?.name+'.png', { type: blob.type });
    })
    

</script>

<div class="flex flex-col items-center w-full justify-center">
    <div class="flex items-center justify-between w-full m-4 mt-12 p-4 font-bold">
        <p>Total</p>
        <p>{data.res?.total}</p>
    </div>
    {#each data.res?.memberships as item}
    <div class="flex items-center justify-between w-full m-4 mt-6 p-4 bg-slate-200 font-bold">
        <p>{item.userName}</p>
        <p class="invisible"></p>
    </div>
    {/each}
    
</div>