/** @type {import('./$types').PageLoad} */
export const prerender = 'auto';
import sdk from "$lib/appwrite.js";
export async function load({params}) {
    let res;
    res = await sdk.getEvent(params.id);
    return {
        res
    };
};