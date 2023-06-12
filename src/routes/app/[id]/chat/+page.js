/** @type {import('./$types').PageLoad} */
import sdk from "$lib/appwrite.js";
export async function load({params}) {
    let tid=params.id;
    let msgs=await sdk.getMsgs(tid);
    msgs=msgs.documents
    return {
        tid,msgs
    };
};