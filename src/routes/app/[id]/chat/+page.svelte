<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    let element;
    import sdk from "$lib/appwrite.js";
    const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  };
    $: if(data.msgs && element) {
		scrollToBottom(element);
	}
    import { goto } from '$app/navigation';
	import { onMount,afterUpdate } from "svelte";
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
    let chat,desc;
    let complete=false;
    afterUpdate(() => {
		if(data.msgs) scrollToBottom(element);
    });
    
    sdk.client.subscribe(['databases.647f52807c7ace13086f.collections.6481a5767313b9661654.documents'], async response => {
    
    let docs=await sdk.getMsgs(data.tid);
    data.msgs=docs.documents;
    loading=false;
});
</script>


{#if loggedin}
    <div bind:this={element} class="h-[40vh] chats overflow-auto  overflow-y-scroll ">
    {#each data.msgs as item}
        
        <div class="chat {item.sender==sender?'chat-end':'chat-start'}">
            <div class="chat-header">
              {item.sender}
            </div>
            <div class="chat-bubble">{item.msg}</div>
            
          </div>
    {/each}
    </div>
<div class="flex flex-col    w-full">
    <div class="flex w-full">
    <form class="flex w-full" on:submit={()=>{
        loading=true;
        sdk.createMsg(data.tid,{'type':'chat','msg':chat,'event':data.tid,'sender':sender}).then(function (response){
            
        });
        chat="";

    }}>
    <input type="text" bind:value={chat} class="w-full input input-bordered mr-4" >
    </form>
    <button class="btn btn-secondary font-bold" on:click={()=>{
        loading=true;
        sdk.createMsg(data.tid,{'type':'chat','msg':chat,'event':data.tid,'sender':sender}).then(function (response){
            
        });
        chat="";
    }}> {#if loading}
         <span class="loading loading-spinner loading-md"></span>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-send-fill text-center" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
        </svg>
    {/if}
        
    </button>
    </div>
</div>
{:else}
     ...
{/if}

            
<style>



    /* Hide scrollbar for Chrome, Safari and Opera */
.chats::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.chats {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}   
</style>