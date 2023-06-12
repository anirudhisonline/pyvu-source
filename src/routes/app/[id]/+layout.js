export const ssr=false;
// export const csr=true;
export const prerender = 'auto';

import sdk from "$lib/appwrite.js";
export async function load({params}) {
    let res;
    let tid=params.id
    res = await sdk.getEvent(params.id);
    return {
        res,tid
    };
};