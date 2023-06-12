<script>
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';
    import { browser } from '$app/environment';
    export let data;
    
    import sdk from "$lib/appwrite.js";
    /** @type {import('./$types').LayoutData} */
    let name=data.res?.name;
    let desc=data.res?.desc;
    let date,time;
    let mode=data.res?.mode;
    let venue=data.res?.venue;
    let imgsrc=data.res?.img;
    let bg=data.res?.bg;
    let clr=data.res?.clr;
    function encodeImageFileAsURL() {
    let element = document.getElementById('eimg');
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        imgsrc=reader.result
    }
    reader.readAsDataURL(file);
    }

    let edit=false;
    
    let  url;
    let link;
    onMount(()=>{url = window.location.href;})
    afterUpdate(()=>{
        if(browser)
        url = window.location.href;
        if(url.includes('info'))
        link='info';
        else if(url.includes('chat'))
        link='chat';
        else if(url.includes('todo'))
        link='todo';
        else if(url.includes('people'))
        link='people';
    })
</script>

<dialog id="my_modal_2" class="modal h-full min-h-[92dvh] modal-bottom sm:modal-middle">
    <h3 class="font-bold text-lg">Hello!</h3>
    
        
    
  
</dialog>

{#if edit}
<div class="my-8 flex h-full flex-col items-center text-center justify-center w-full">
    <p class="font-bold ">choose an image</p>
    <input type="file" class="file-input file-input-bordered min-h-12 w-full max-w-xs mt-2" id="eimg" on:change={()=>{encodeImageFileAsURL();}} />
    <img src="{imgsrc}" alt="" class="my-4 w-40">
    <p class="font-bold">give the event a name that can be changed later</p>
    <input type="text" bind:value="{name}" placeholder="Type here" class="my-4 input input-ghost input-lg w-full max-w-xs" />
    <p class="font-bold">tell us a bit more about the event</p>
    <input type="text" bind:value="{desc}" placeholder="Type here" class="my-4 input input-ghost input-lg w-full max-w-xs" />
    <p class="font-bold">When is the event happening</p>
    <input type="date" bind:value="{date}" placeholder="Type here" class="my-4 input input-bordered input-lg w-full max-w-xs" />
    <input type="time" bind:value="{time}" placeholder="Type here" class="my-4 input input-bordered input-lg w-full max-w-xs" />
    <p class="font-bold">Where is this event taking place</p>
    <div class="flex">
        <label class="label cursor-pointer">
            <input type="radio"  name="mode" bind:group={mode} value="offline"  class="radio checkbox-primary"/>
          <span class="label-text ml-2">Offline</span> 
        </label>
        <label class="label cursor-pointer">
            <input type="radio"  name="mode" bind:group={mode} value="online"  class="radio checkbox-primary"/>
            <span class="label-text ml-2">Online</span> 
        </label>
    </div>

    <p class="mt-4 font-bold">venue</p>
    <input type="text" bind:value="{venue}" placeholder="Type here" class="my-4 input input-ghost input-lg w-full max-w-xs" />
    <p class="font-bold mt-4">pick a color and an emoji</p>
            <div class="flex items-center justify-between w-max text-2xl mt-4">
                <button class="btn text-3xl m-8 {bg=='cake'?'btn-bordered':'btn-ghost'}"  on:click={()=>{
                    bg='cake';
                }}>🎂</button>
                <button class="btn text-3xl m-8 {bg=='work'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='work';
                }}>🧑‍💻</button>
                <button class="btn text-3xl m-8 {bg=='pp'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='pp';
                }}>🎉</button>
                <button class="btn text-3xl m-8 {bg=='pizza'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='pizza';
                }}>🍕</button>
                <button class="btn text-3xl  m-8 {bg=='ppo'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='ppo';
                }}>🥳</button>
                <button class="btn text-3xl m-8 {bg=='tool'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='tool';
                }}>⚒️</button>
                <button class="btn text-3xl m-8 {bg==''?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='';
                }}>🚫</button>
            </div>

            <div class="flex items-center px-4 justify-between w-max text-2xl mt-4">
                <button class="btn bg-rose-600 text-3xl m-8  {clr=='bg-rose-600'?'border-2 border-black':'btn-ghost'}"  on:click={()=>{
                    clr='bg-rose-600';
                }}></button>
                <button class="btn bg-primary text-3xl  m-8 {clr=='bg-primary'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-primary';
                }}></button>
                <button class="btn bg-red-600 text-3xl  m-8 {clr=='bg-red-600'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-red-600';
                }}></button>
                <button class="btn bg-orange-700 text-3xl m-8  {clr=='bg-orange-700'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-orange-700';
                }}></button>
                <button class="btn bg-sky-600 text-3xl m-8  {clr=='bg-sky-600'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-sky-600';
                }}></button>
                <button class="btn bg-violet-700 text-3xl m-8  {clr=='bg-violet-700'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-violet-700';
                }}></button>
                <button class="btn bg-white text-3xl m-8 shadow-md {clr==''?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='';
                }}></button>
            </div>
    <button class="btn btn-primary font-bold" on:click={()=>{
        sdk.updateEvent(data.res?.$id,{'name':name,'desc':desc,'date':date,'time':time
        ,'mode':mode,'img':imgsrc,'bg':bg,'clr':clr
        ,'venue':venue}).then(async function  (response){
            data.res = await sdk.getEvent(data.res?.$id);
            edit=false;
            
        });
    }}>Save</button>
</div>
    
{:else}
<div class="mt-14 flex flex-col items-center justify-center text-center">
    <div>
        <div class="flex items-center justify-center items-center flex-col md:flex-row">
            {#if data.res?.img==undefined}
                <div class="mb-4 md:mb-0 w-72 rounded-full"><img src="https://placehold.co/200" alt=""></div>
            {:else}
                 <div class="mb-4 md:mb-0 w-72 rounded-full"><img src="{data.res?.img}" alt=""></div>
            {/if}
            <div class="text-left md:ml-8 flex flex-col justify-between">
                <div class="flex flex-col  justify-between">
                <h1 class="text-3xl font-black">{data.res?.name}</h1>
                
                <h2>{data.res?.desc}</h2>
                <div class="mt-2 flex flex-col items-center justify-center w-full">

                    <div class="flex items-center justify-between mt-4 mb-2">
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
                
                </div>
                <button class="btn btn-primary mt-4" on:click={()=>{
                    edit=true;
                }}>EDIT</button>
                <div class="py-4 flex justify-between">
                    <a href="/app/{data.tid}/info" class="tab tab-bordered {link=='info'?'tab-active':''}" >INFO</a> 
                    <a href="/app/{data.tid}/chat" class="tab tab-bordered {link=='chat'?'tab-active':''}">CHAT</a> 
                    <a href="/app/{data.tid}/todo" class="tab tab-bordered {link=='todo'?'tab-active':''}">TODO</a>
                    <a href="/app/{data.tid}/people" class="tab tab-bordered {link=='people'?'tab-active':''}">PEOPLE</a>
                </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
    
    <div class="w-full">
        <slot/>
    </div>
</div>

{/if}



