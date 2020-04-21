// import { useState, useEffect } from "react";
// import { firebase } from '../firebase'

// export const useUserProfiles = () => {
//   const [userProfiles, setUserProfiles] = useState([]);

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection('userProfila')
//       .get()
//       .then(snapshop => {
//         console.log('snapshot: ',snapshop)
//         const allUserProfiles = snapshop.docs.map(userProfile => ({
//           ...userProfile.data(),
//           docId: userProfile.id,
//         }))

//         if (JSON.stringify(allUserProfiles) !== JSON.stringify(userProfiles)) {
//           setUserProfiles(allUserProfiles);
//         }
//       })
//   }, [userProfiles]);

//   return {userProfiles, setUserProfiles}
// }