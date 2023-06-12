<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    
    import sdk from "$lib/appwrite.js";
    let url;
    let loggedin;
    let loading=true;
    let bgurl;
    
    switch (data.res?.bg) {
            case 'cake':
            bgurl='https://api.pyvu.in/v1/storage/buckets/648567fce83f7cc69c0a/files/6485683db291651e7854/view?project=646e4104545b97c89aa3'
            break;
            case 'pizza':
            bgurl='https://api.pyvu.in/v1/storage/buckets/648567fce83f7cc69c0a/files/648568444deb74fe9f49/view?project=646e4104545b97c89aa3'
            break;
            case 'pp':
            bgurl='https://api.pyvu.in/v1/storage/buckets/648567fce83f7cc69c0a/files/6485684c497b21045ff0/view?project=646e4104545b97c89aa3'
            break;
            case 'ppo':
            bgurl='https://api.pyvu.in/v1/storage/buckets/648567fce83f7cc69c0a/files/64856853de0b95bb0bc7/view?project=646e4104545b97c89aa3'
            break;
            case 'tool':
            bgurl='https://api.pyvu.in/v1/storage/buckets/648567fce83f7cc69c0a/files/648568612780bde2ebe0/view?project=646e4104545b97c89aa3'
            break;
            case 'work':
            bgurl='https://api.pyvu.in/v1/storage/buckets/648567fce83f7cc69c0a/files/64856867b88874dc81fa/view?project=646e4104545b97c89aa3'
            break;
        default:
            break;
    }
    let usr;
    onMount(async()=>{
        url = window.location.href;
        usr=await sdk.getsession()
        const res = await sdk.getlogin();
		if(res){
            loggedin=true;
            loading=false;
        }
        else
        {
            loggedin=false;
            loading=false;
        }
        if(data.res==undefined)
        
    {
        
    }
    else{
        
    }
    })
    
    
if(data.res?.clr=='')
data.res.clr='bg-white';
</script>

<style>
.background{
    background-origin: content-box;
   
    background-size: 256px;
    background-position: center center;
}</style>

{#if data.res==undefined}
     No event
{:else}



<div style="background-image: url('{bgurl}');" class="flex h-[100dvh] overflow-x-hidden background w-screen items-center justify-center align-top">

    <div class="rounded-xl {data.res?.clr}  max-w-md p-4 m-2 flex flex-col items-center justify-center" style="background-color: rgba(black, black, black, 0.5);">
       <p class="">You are invited to</p>
       {#if data.res?.img}
        <img src="{data.res?.img}" class="rounded-full m-4" alt="">
       {:else}
        <img src="https://placehold.co/200" class="rounded-full m-4" alt="">
       {/if}
       
       <p class="font-bold m-2">{data.res?.name}</p>
       <p class="break-words text-center">{data.res?.desc}</p>
       <div class="flex mt-4">
        <div class="flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-calendar-event-fill mr-4" viewBox="0 0 16 16">
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
            </svg>
            {#if data.res?.date!=null}
                <p>{data.res?.date.slice(8,10)}/{data.res?.date.slice(5,7)}/{data.res?.date.slice(0,4)}</p>
            {:else}
                 <p>Not available</p>
            {/if}
            
        </div>
        <div class="flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clock-fill mr-4" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            </svg>
            {#if data.res?.time!=null}
                <p>{data.res?.time.slice(11,13)}:{data.res?.time.slice(14,16)}</p>
            {:else}
                 <p>Not available</p>
            {/if}
            
        </div>
        <div class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt-fill mr-4" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            {#if data.res?.mode!=null}
                <p>{data.res?.mode} / {data.res?.venue}</p>
            {:else}
                 <p>Not available</p>
            {/if}
            
        </div>
       </div>
       {#if loading}
         <div class="loading mt-8 m-4"></div>
       {:else}
        {#if loggedin}
        <button class="m-4 mt-8 btn-primary btn" on:click={async()=>{
            loading=true;
            if(await sdk.executeJoin(data.res?.$id,usr.email))
            goto('/app/'+data.res?.$id);
        }}>join</button>
        {:else}
        <button on:click={async()=>{await sdk.glogin(window.location.href);}} class="m-4 mt-8 btn btn-neutral font-bold text-white flex items-center justify-center mx-2"> 
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg>
            sign in with google</button>
        {/if}
       {/if}
       
       
    </div>
</div>

{/if}