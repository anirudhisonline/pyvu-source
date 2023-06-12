import { Client,Account,ID,Teams,Databases,Permission,Role,Avatars,Query,Functions     } from 'appwrite';
import { goto } from '$app/navigation';

import config from './config.js';

const client = new Client();

const account = new Account(client);

const teams = new Teams(client);

const databases = new Databases(client);

const avatars = new Avatars(client);

const functions = new Functions(client);

client
    .setEndpoint(config.ENDPOINT)
    .setProject(config.PROJECT_ID);
// //console.log(client);
let sdk;
export default sdk ={
    client,
    register: async (email,password,name)=>{
        // //console.log('register');
        // //console.log(email,password,name);
        return await account.create(ID.unique(),email,password,name);
        // promise.then(function (response) {
        //     return response; // Success
        // }, function (error) {
        //     //console.log(error); // Failure
        // });

    },
    login: async (email,password)=>{
        //console.log('login');
        //console.log(email,password);

        return await account.createEmailSession(email, password).then(function (response) {
            //console.log(response); // Success
            goto('./app');
        }, function (error) {
            //console.log(error); // Failure
            alert(error.message);
        });

        
    },
    glogin: async (successlink)=>{
        if(successlink=='')
        return await account.createOAuth2Session('google',successlink+'/app','http://localhost:5173/auth');
        else
        return await account.createOAuth2Session('google',successlink,'http://localhost:5173/auth');
    },
    logout: async ()=>{
        //console.log('logout works');
        return await account.deleteSession('current').then(function (response) {
            
            goto('./auth'); // Success
        }, function (error) {
            //console.log(error.message);
            goto('./auth'); // Failure
        });
    },
    getsession: async ()=>{
        //console.log('session')
        return await account.get().then(function (response) {
            //console.log(response);
            return response; // Success
        }, function (error) {
            //console.log(error.message); // Failure
        });
    },
    getlogin: async ()=>{
        //console.log('session')
        return await account.get().then(function (response) {
            return true; // Success
        }, function (error) {
            console.log(error.message);
            return false // Failure
        });
    },
    createEvent: async (details)=>{
        let teamid;
        // //console.log(event_team_id);
        await teams.create(ID.unique(), details.name).then(function (response){
            //console.log(response);
            teamid=response.$id})
        return await databases.createDocument(
            config.DB,
            config.EVENT_COLLECTION,
            teamid,
            details,
            [
                Permission.read(Role.any()), 
                Permission.read(Role.team(teamid)),                 
                Permission.write(Role.team(teamid)),
            ],
        ).then(function (response){
            // //console.log(response);
            return response;
        });
    },
    getEvent: async (id)=>{
        let teamid;
        // //console.log(event_team_id);
        try {
            return await databases.getDocument(
                config.DB,
                config.EVENT_COLLECTION,
                id,
            ).then(function (response){
                // //console.log(response);
                return response;
            });
        } catch (error) {
            //console.log(error);
        }
        
    },
    getTeamEvent: async (ids)=>{
        let teamid;
        let resEvents=[];
        //console.log(ids);
        // //console.log(event_team_id);
        ids.forEach(async element => {
            //console.log(element)
           try {
            let event = await databases.getDocument(
                config.DB,
                config.EVENT_COLLECTION,
                element,
            );
            resEvents.push(event);
        } catch (error) {
            //console.log(error);
        } 
        });
        return resEvents;
        
    },
    updateEvent: async (id,details)=>{
        let teamid;
        //console.log(id,details);
        try {
            
                return await databases.updateDocument(config.DB, config.EVENT_COLLECTION, id,details).then(function (response){
                // //console.log(response);
                return response;
            });
        } catch (error) {
            //console.log(error);
        }
        
    },
    // joinEvent: async (tid,url)=>{
    //     let teamid=tid;
    //     //console.log(tid);
    //     let userId;
    //     let user=await account.get();
    //     userId=user.$id;
    //     //console.log(user);
    //     // //console.log(event_team_id);
    //     //console.log(teamid);
    //     try {
    //         return await teams.createMembership('64804bf7a7bf6d7c8512', [], url.replace('invite','app'),user.email,userId).then(
    //             function (response){
    //             // //console.log(response);
    //             return response;
    //         });  
    //     } catch (error) {
    //         //console.log(error.message);
    //     }
        
    // },
    getEvents: async (id)=>{
        let teamid;
        let user=await account.get();
        //console.log('appwrite js',id);
        // //console.log(event_team_id);
        try {
            return await databases.listDocuments(
                config.DB, 
                config.EVENT_COLLECTION,
                [
                    Query.equal('userID', user.$id)
                ]
                ).then(function (response){
                // //console.log(response);
                return response;
            });
        } catch (error) {
            //console.log(error);
        }
        
    },
    getTeams: async (id)=>{
        let teamid;
        let user=await account.get();
        //console.log('appwrite js',id);
        // //console.log(event_team_id);
        try {
            return await teams.list().then(function (response){
                // //console.log(response);
                return response;
            });
        } catch (error) {
            //console.log(error);
        }
        
    },
    createTodo: async (tid,details)=>{
        let teamid=tid;
        // //console.log(event_team_id);
        return await databases.createDocument(
            config.DB,
            config.TODO_COLLECTION,
            ID.unique(),
            details,
            [
                
                Permission.read(Role.team(teamid)),                 
                Permission.write(Role.team(teamid)),
            ],
        ).then(function (response){
            // //console.log(response);
            return response;
        });
    },
    getTodos: async (id)=>{
        let teamid;
        //console.log('appwrite js',id);
        // //console.log(event_team_id);
        try {
            return await databases.listDocuments(
                config.DB, 
                config.TODO_COLLECTION,
                [
                    Query.equal('event', id)
                ]
                ).then(function (response){
                // //console.log(response);
                return response;
            });
        } catch (error) {
            //console.log(error);
        }
        
    },
    deleteTodo: async (id)=>{
        let teamid;
        // //console.log(event_team_id);
        try {
                return await databases.deleteDocument(config.DB, config.TODO_COLLECTION, id).then(function (response){
                // //console.log(response);
                return response;
            });
        } catch (error) {
            //console.log(error);
        }
        
    },
    updateTodo: async (id,details)=>{
        let teamid;
        //console.log(id,details);
        try {
            
                return await databases.updateDocument(config.DB, config.TODO_COLLECTION, id,details).then(function (response){
                // //console.log(response);
                return response;
            });
        } catch (error) {
            //console.log(error);
        }
        
    },
    createMsg: async (tid,details)=>{
        let teamid=tid;
        // //console.log(event_team_id);
        return await databases.createDocument(
            config.DB,
            config.MSG_COLLECTION,
            ID.unique(),
            details,
            [
                
                Permission.read(Role.team(teamid)),                 
                Permission.write(Role.team(teamid)),
            ],
        ).then(function (response){
            // //console.log(response);
            return response;
        });
    },
    getMsgs: async (id)=>{
        let teamid;
        //console.log('appwrite js',id);
        // //console.log(event_team_id);
        try {
            return await databases.listDocuments(
                config.DB, 
                config.MSG_COLLECTION,
                [
                    Query.equal('event', id),
                    

                ]
                ).then(function (response){
                // //console.log(response);
                return response;
            });
        } catch (error) {
            //console.log(error);
        }
        
    },
    getMembers: async (id)=>{
        let teamid;
        //console.log('appwrite js',id);
        // //console.log(event_team_id);
        try {
            return await teams.listMemberships(id).then(function (response){
                // //console.log(response);
                return response;
            });
        } catch (error) {
            //console.log(error);
        }
        
    },
    executeJoin: async(teamid,emailid)=>{
        let data={teamid:teamid,userid:emailid};
        //console.log(data);
        //console.log(JSON.stringify(data));
        try {
            return await functions.createExecution(config.JOIN_FN,JSON.stringify(data)).then(function (response){
                // //console.log(response);
                // return response;
                let res=response;
                if(res.status=="completed")
                return true;
                else
                return false;
            });
        } catch (error) {
           //console.log(error); 
        }
    }
};