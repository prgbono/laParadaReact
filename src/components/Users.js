import React from 'react'
import { useState, useEffect } from "react";
import { firebase } from '../firebase'


export const Users = () => {
  //const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .get()
      .then(snapshop => {
        const allUsers = snapshop.docs.map(userProfile => ({
          ...userProfile.data(),
          docId: userProfile.id,
        }))

        // if (JSON.stringify(allUserProfiles) !== JSON.stringify(userProfiles)) {
        //   setUserProfiles(allUserProfiles);
        // }
        console.log('All Users: ',allUsers)
      })
  //}, [userProfiles]);
  });

  //return {userProfiles, setUserProfiles}
  return null
}

