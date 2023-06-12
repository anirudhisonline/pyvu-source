export const ssr=false;
export const csr=true;

/** @type {import('./$types').PageLoad} */
import sdk from "$lib/appwrite.js";
export async function load({params}) {
    let tid=params.id;
    let todos=await sdk.getTodos(tid);
    todos=todos.documents
    return {
        tid,todos
    };
};