<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    import sdk from "$lib/appwrite.js";
    
    import { goto } from '$app/navigation';
	import { onMount } from "svelte";
    let loggedin;
    let loading=false;

    let sender;
    onMount(async ()=>{
        const res = await sdk.getlogin();
		if(res){
            loggedin=true;
        }
        else
        {
            loggedin=false;
        }
        sender=await sdk.getsession();
        sender=sender.name;
    })
    let todo,desc;
    let complete=false;

    sdk.client.subscribe(['databases.647f52807c7ace13086f.collections.648090765ca558f9430c.documents'], async response => {
    
    let docs=await sdk.getTodos(data.tid);
    data.todos=docs.documents;
    loading=false;
});
</script>

{#if loggedin}
<div class="flex flex-col mt-12 w-full">
    <div class="flex w-full">
    <form class="flex w-full" on:submit={()=>{
        loading=true;
        sdk.createTodo(data.tid,{'todo':todo,'desc':sender,'complete':complete,'event':data.tid}).then(function (response){
            
        });
        todo="";

    }}>
    <input type="text" bind:value={todo} class="w-full input input-bordered mr-4" >
    </form>
    <button class="btn btn-primary font-bold" on:click={()=>{
        loading=true;
        sdk.createTodo(data.tid,{'todo':todo,'desc':sender,'complete':complete,'event':data.tid}).then(function (response){
            
        });
        todo="";
    }}> {#if loading}
         <span class="loading loading-spinner loading-md"></span>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
    {/if}
        
    </button>
    </div>
    <div class="flex mt-8 w-full flex-col items-center justify-center">
        {#each data.todos as item}
        <p class="text-xs w-full text-left">{(item.desc==null?'':item.desc)}</p>
        <div class="bg-slate-100 mt-0 m-4 p-4 rounded-md w-full flex items-center justify-between">
            <form class="w-full" on:submit={()=>{
                let ucomplete=item.complete;
                if(ucomplete=="true")
                ucomplete="false";
                else
                ucomplete="true";
                let ucompletebool=ucomplete=="true"?true:false;
               sdk.updateTodo(item.$id,{'todo':item.todo,'complete':item.complete}); 
            }}>
            <input type="text"  bind:value="{item.todo}" class="w-full bg-transparent">
            </form>
            <div class="flex">
                <button on:click={()=>{
                    loading=true;
                    sdk.deleteTodo(item.$id);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill ml-2 mr-8 hover:text-error" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
                <input type="checkbox" class="checkbox" checked="{item.complete}" on:change={()=>{
                    let ucomplete=item.complete;
                    if(ucomplete=="true")
                    ucomplete="false";
                    else
                    ucomplete="true";
                    let ucompletebool=ucomplete=="true"?true:false;
                   sdk.updateTodo(item.$id,{'todo':item.todo,'complete':!item.complete}); 
                }} name="" id="">
            </div>
        </div>
        {/each}
    </div>
</div>
{:else}
     ...
{/if}

            