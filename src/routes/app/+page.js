export const ssr=false;
// export const csr=true;
export const prerender = 'auto';

/** @type {import('./$types').PageLoad} */
import sdk from "$lib/appwrite.js";
export async function load({params}) {
    let value=sdk.getsession();
    let tid=params.id;
    let events=await sdk.getEvents();
    let teams=await sdk.getTeams();
    //console.log(teams);
    events=events.documents
    let teamevents=[];
    teams.teams.forEach(element => {
        teamevents.push(element.$id)
    });
    let tevents=await sdk.getTeamEvent(teamevents);
    return {
        tid,events,teams,tevents,value
    };
};