/** @type {import('./$types').PageLoad} */
import sdk from "$lib/appwrite.js";
export async function load({params}) {
    let res;
    res = await sdk.getMembers(params.id);
    return {
        res
    };
};