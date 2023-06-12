<script>
    /** @type {import('./$types').LayoutData} */
    export const ssr=false;
    export const csr=true;
    export const prerender = true;
    import "../app.css";
    import sdk from "$lib/appwrite.js";
    export let data;
    import { afterUpdate, onMount } from 'svelte';
    import { goto } from '$app/navigation';
    let loggedin;
    let nav;
    let url;
    onMount(()=>{
        url = window.location.href;
        if(url.includes('invite'))
    {
        nav='hide';
    }
    else{
        nav='show';
        
    }
    })

    afterUpdate(async () => {
		const res = await sdk.getlogin();
		if(res){
            loggedin=true;
        }
        else
        {
            loggedin=false;
        }
	});
    let domain;
    


    

</script>


<div class="h-full">
    {#if nav=='show'}
    <div class="flex items-center justify-between sticky top-0 over z-50 backdrop-blur-md h-[8dvh] p-2 pl-12 pr-12 pt-4">
        <img class="h-12" src="/pyvu.in logo.png" alt="">    
        <a href="/" class="ml-4 font-extrabold text-pr text-2xl">pyvu</a>
        <div class="flex items-center justify-center">
            
            
                {#if loggedin}
                    <a href="/app/create" class="btn btn-ghost mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </a>
                     <button  on:click={()=>{sdk.logout();}} >Logout</button>
                {:else}
                    <a href="/auth">Login</a>
                {/if}
            
           
                
           
                
            
            
        </div>


    </div>
{:else}
    <!-- else content here -->
{/if}
    <div class="{nav=="hide"?'min-h-[100dvh]':'min-h-[92dvh]'} {nav=="hide"?'p-0':'p-4'} flex flex-col items-center">
        <slot />
    </div>
</div>