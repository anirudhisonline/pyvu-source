<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    let url;
    onMount(()=>{
        url = window.location.href;
        if(data.res==undefined)
    {
        
    }
    else{
        goto(url+'/info');
        
    }
    })
    
    

</script>
