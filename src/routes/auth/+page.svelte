<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import sdk from "$lib/appwrite.js";

    let aswitch=true;
    let name,email,password;
    let loading=false;

</script>

<div class="flex flex-col items-center justify-center">
    {#if aswitch}
    <div class="card flex-shrink-0 w-full max-w-sm shadow-md bg-base-100 ">
        <p class="text-center  mt-12 text-2xl font-black ">login</p>
        
        <div class="card-body">
            <button on:click={async()=>{await sdk.glogin((window.location.href).slice(0,-4));
              }} class="btn btn-neutral font-bold text-white flex items-center justify-center mx-2"> 
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                  </svg>
                sign in with google</button>
                <p class="text-center my-4">or</p>
          <div class="form-control">
            
            <input type="text" placeholder="email" bind:value={email} class="input input-bordered" />
          </div>
          <div class="form-control">
            
            <input type="password" placeholder="password" bind:value={password} class="input input-bordered" />
            
          </div>
          <div class="form-control text-center mt-6">
            {#if loading}
                <span class="text-base-100 text-center bg-primary loading loading-spinner loading-md"></span>
            {:else}
            <button class="btn btn-primary" on:click={()=>{
                loading=true;
                sdk.login(email,password);
                
            }}>Login</button>
            {/if}
            
            <p class="mt-6 text-sm">No account ?? <span class="underline cursor-pointer" on:click={()=>{aswitch=!aswitch;}}> click here </span> for free account</p>
          </div>
        </div>
      </div>
    {:else}
    <div class="card flex-shrink-0 w-full max-w-sm shadow-md bg-base-100">
        <p class="text-center  mt-12 text-2xl font-black ">register</p>
        
        <div class="card-body">
            <button on:click={()=>{sdk.glogin();}} class="btn-neutral font-bold text-white flex items-center justify-center btn mx-2">
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                  </svg>
                sign in with google</button>
                <p class="text-center my-4">or</p>
            <div class="form-control">
               
                <input type="text" placeholder="name" bind:value={name} class="input input-bordered" />
            </div>
          <div class="form-control">
            
            <input type="email" placeholder="email" bind:value={email} class="input input-bordered" />
          </div>
          <div class="form-control">
            
            <input type="password" placeholder="password" bind:value={password} class="input input-bordered" />
            
          </div>
          <div class="form-control text-center mt-6">
            {#if loading}
                <span class=" loading loading-spinner loading-md"></span>
            {:else}
                <button class="btn btn-primary" on:click={()=>{
                    loading=true
                    sdk.register(email,password,name);
                }}>Register</button>
            {/if}
            
            <p class="mt-6 text-sm">Have an account ?? <span class="underline cursor-pointer" on:click={()=>{aswitch=!aswitch;}}> click here </span> to login</p>
          </div>
        </div>
      </div>
    {/if}

</div>