export const ssr=false;
export const csr=true;
export const prerender = 'auto';

/** @type {import('./$types').PageLoad} */
import sdk from "$lib/appwrite.js";
export async function load({params}) {
    let res;
    res = await sdk.getEvent(params.id);
    return {
        res
    };
};