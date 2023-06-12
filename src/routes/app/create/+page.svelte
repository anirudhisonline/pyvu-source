<script>
    /** @type {import('./$types').PageData} */
    
    import sdk from "$lib/appwrite.js";
    
    import { goto } from '$app/navigation';
    export let data;
    let step=1;
    let name='',desc='',date,time,mode,venue='';
    let bg='',clr='';
    let imgsrc;
    function encodeImageFileAsURL() {
    let element = document.getElementById('eimg');
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        imgsrc=reader.result
    }
    reader.readAsDataURL(file);
    }

</script>

<div class="flex flex-col items-center max-w-md  justify-center">
    <p class="text-5xl font-black mb-12">Create an event 🙂</p>
    {#if step==1}
        <progress class="progress progress-primary w-56" value="0" max="100"></progress>
        <div class="my-8 flex flex-col items-center text-center justify-center w-full">
            <p class="font-bold mt-4">give the event a name that can be changed later</p>
            <input type="text" placeholder="Type here" bind:value="{name}" class="my-4 input input-ghost input-lg w-full max-w-xs" />
            <p class="font-bold mt-4">choose an image</p>
            <input type="file" class="file-input file-input-bordered w-full max-w-xs mt-2" id="eimg" on:change={()=>{encodeImageFileAsURL();}} />
            <img src="{imgsrc}" alt="" class="my-4">
            <p class="font-bold mt-4">pick a color and an emoji</p>
            <div class="flex items-center justify-between w-full text-2xl mt-4">
                <button class="btn text-3xl {bg=='cake'?'btn-bordered':'btn-ghost'}"  on:click={()=>{
                    bg='cake';
                }}>🎂</button>
                <button class="btn text-3xl {bg=='work'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='work';
                }}>🧑‍💻</button>
                <button class="btn text-3xl {bg=='pp'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='pp';
                }}>🎉</button>
                <button class="btn text-3xl {bg=='pizza'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='pizza';
                }}>🍕</button>
                <button class="btn text-3xl {bg=='ppo'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='ppo';
                }}>🥳</button>
                <button class="btn text-3xl {bg=='tool'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='tool';
                }}>⚒️</button>
            </div>

            <div class="flex items-center px-4 justify-between w-full text-2xl mt-4">
                <button class="btn bg-rose-600 text-3xl {clr=='bg-rose-600 text-white'?'border-2 border-black':'btn-ghost'}"  on:click={()=>{
                    clr='bg-rose-600 text-white';
                }}></button>
                <button class="btn bg-primary text-3xl {clr=='bg-primary text-white'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-primary text-white';
                }}></button>
                <button class="btn bg-red-600 text-3xl {clr=='bg-red-600 text-white'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-red-600 text-white';
                }}></button>
                <button class="btn bg-orange-700 text-3xl {clr=='bg-orange-700 text-white'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-orange-700 text-white';
                }}></button>
                <button class="btn bg-sky-600 text-3xl {clr=='bg-sky-600 text-white'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-sky-600 text-white';
                }}></button>
                <button class="btn bg-violet-700 text-3xl {clr=='bg-violet-700 text-white'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-violet-700 text-white';
                }}></button>
            </div>

        </div>
        <div class="w-full flex items-center justify-between">
            <div class="invisible">.</div>
            <button class="btn btn-primary font-bold" on:click={()=>{
                step++;
            }}>Next</button>
        </div>
        
    {:else if  step==2}
        <progress class="progress progress-primary w-56" value="10" max="100"></progress>
        <div class="my-8 flex flex-col items-center text-center justify-center w-full">
            <p class="font-bold">tell us a bit more about the event</p>
            <input type="text" placeholder="Type here" bind:value="{desc}" class="my-4 input input-ghost input-lg w-full max-w-xs" />
        </div>
        <div class="w-full flex items-center justify-between">
            <button on:click={()=>{
                step--;
            }}>Back</button>
            <button class="btn btn-primary font-bold" on:click={()=>{
                step++;
            }}>Next</button>
        </div>
    {:else if  step==3}
        <progress class="progress progress-primary w-56" value="40" max="100"></progress>
        <div class="my-8 flex flex-col items-center text-center justify-center w-full">
            <p class="font-bold">When is the event happening</p>
            <input type="date" placeholder="Type here" bind:value="{date}" class="my-4 input input-ghost input-lg w-full max-w-xs" />
            <input type="time" placeholder="Type here" bind:value="{time}" class="my-4 input input-ghost input-lg w-full max-w-xs" />
        </div>
        <div class="w-full flex items-center justify-between">
            <button  on:click={()=>{
                step--;
            }}>Back</button>
            <button  class="btn btn-primary font-bold" on:click={()=>{
                step++;
            }}>Next</button>
        </div>
    {:else if  step==4}
        <progress class="progress progress-primary w-56" value="70" max="100"></progress>
        <div class="my-8 flex flex-col items-center text-center justify-center w-full">
            <p class="font-bold">Where is this event taking place</p>
            <div class="flex">
                <label class="label cursor-pointer">
                    <input type="radio" name="mode" bind:group={mode}  value="offline" class="radio checkbox-primary" />
                  <span class="label-text ml-2">Offline</span> 
                </label>
                <label class="label cursor-pointer">
                    <input type="radio" name="mode" bind:group={mode}  value="online" class="radio checkbox-primary" />
                    <span class="label-text ml-2">Online</span> 
                </label>
            </div>
        
            <p class="mt-4 font-bold">venue</p>
            <input type="text" bind:value="{venue}" placeholder="Type here" class="my-4 input input-ghost input-lg w-full max-w-xs" />
        
        </div>
        <div class="w-full flex items-center justify-between">
            <button on:click={()=>{
                step--;
            }}>Back</button>
            <button class="btn btn-primary font-bold" on:click={()=>{
                step++;
            }}>Next</button>
        </div>
    {:else if  step==5}
        <progress class="progress progress-primary w-56" value="100" max="100"></progress>
        <div class="my-8 flex flex-col items-center text-center justify-center w-full">
            <p class="font-bold mt-4">choose an image</p>
            <input type="file" class="file-input file-input-bordered w-full max-w-xs mt-2" id="eimg" on:change={()=>{encodeImageFileAsURL();}} />
            <img src="{imgsrc}" alt="" class="my-4">
            <p class="font-bold">give the event a name that can be changed later</p>
            <input type="text" bind:value="{name}" placeholder="Type here" class="my-4 input input-ghost input-lg w-full max-w-xs" />
            <p class="font-bold">tell us a bit more about the event</p>
            <input type="text" bind:value="{desc}" placeholder="Type here" class="my-4 input input-ghost input-lg w-full max-w-xs" />
            <p class="font-bold">When is the event happening</p>
            <input type="date" bind:value="{date}" placeholder="Type here" class="my-4 input input-ghost input-lg w-full max-w-xs" />
            <input type="time" bind:value="{time}" placeholder="Type here" class="my-4 input input-ghost input-lg w-full max-w-xs" />
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
            <div class="flex items-center justify-between w-full text-2xl mt-4">
                <button class="btn text-3xl {bg=='cake'?'btn-bordered':'btn-ghost'}"  on:click={()=>{
                    bg='cake';
                }}>🎂</button>
                <button class="btn text-3xl {bg=='work'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='work';
                }}>🧑‍💻</button>
                <button class="btn text-3xl {bg=='pp'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='pp';
                }}>🎉</button>
                <button class="btn text-3xl {bg=='pizza'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='pizza';
                }}>🍕</button>
                <button class="btn text-3xl {bg=='ppo'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='ppo';
                }}>🥳</button>
                <button class="btn text-3xl {bg=='tool'?'btn-bordered':'btn-ghost'}" on:click={()=>{
                    bg='tool';
                }}>⚒️</button>
            </div>

            <div class="flex items-center px-4 justify-between w-full text-2xl mt-4">
                <button class="btn bg-rose-600 text-3xl {clr=='bg-rose-600 text-white'?'border-2 border-black':'btn-ghost'}"  on:click={()=>{
                    clr='bg-rose-600 text-white';
                }}></button>
                <button class="btn bg-primary text-3xl {clr=='bg-primary text-white'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-primary text-white';
                }}></button>
                <button class="btn bg-red-600 text-3xl {clr=='bg-red-600 text-white'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-red-600 text-white';
                }}></button>
                <button class="btn bg-orange-700 text-3xl {clr=='bg-orange-700 text-white'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-orange-700 text-white';
                }}></button>
                <button class="btn bg-sky-600 text-3xl {clr=='bg-sky-600 text-white'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-sky-600 text-white';
                }}></button>
                <button class="btn bg-violet-700 text-3xl {clr=='bg-violet-700 text-white'?'border-2 border-black':'btn-ghost'}" on:click={()=>{
                    clr='bg-violet-700 text-white';
                }}></button>
            </div>
        </div>
        <div class="w-full flex items-center justify-between">
            <button on:click={()=>{
                step--;
            }}>Back</button>
            <button class="btn btn-primary font-bold" on:click={()=>{
                if(name=='')
                name='Event'+Math.floor(Math.random() * (1111 - 1 + 1) + 1);
                sdk.createEvent({'name':name,'desc':desc,'date':date,'time':time
                ,'mode':mode,'img':imgsrc,'bg':bg,'clr':clr
                ,'venue':venue}).then(function (response){
                    goto('/app/'+response.$id);
                });
            }}>Create</button>
        </div>
    {:else}
         <!-- else content here -->
    {/if}
    


</div>