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

<div class="mt-24 flex flex-col items-center justify-center">

    <div class="flex items-center justify-center mb-8">
        
    </div>
    <button class="mt-4 btn btn-secondary flex items-center justify-center" on:click={()=>{
        navigator.share({url:'https://www.pyvu.in/invite/'+data.res?.$id,text:'You are invited to '+data.res?.name,files:file})
    }}>
        <p class="mr-4">Invite your friends</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class=" bi bi-share-fill" viewBox="0 0 16 16">
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
        </svg>
    </button>

</div>

