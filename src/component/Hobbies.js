// function Hobbies() {
//   let hobbies = [
//     {
//       name: "Lari",
//       img: "https://th.bing.com/th/id/OIP.r1aTQEVGqiFHbFqvh5H-aQHaHN?pid=ImgDet&rs=1",
//     },
//     {
//       name: "Berenang",
//       img: "https://th.bing.com/th/id/OIP.4Aha2vSI3oPu8-fKB2x6EAHaE7?pid=ImgDet&rs=1",
//     },
//     {
//       name: "mancing",
//       img: "https://th.bing.com/th/id/R.88580235432092719f0aa0fe82b3ecd5?rik=VysCaNM3e3njKA&riu=http%3a%2f%2fwww.fantaseacharters.com%2fmedia%2fattachments%2fview%2fimg%2fdown_rigging_fishing_rod%2fjpg&ehk=7ACdvAM6O8HEhETPZk1jQyK4MhG0qXytAt9YdLyU0RU%3d&risl=&pid=ImgRaw&r=0",
//     },
//   ];

//   return (
//     <div id="hobbies">
//       <h2>My hobbies</h2>
//       <div className="hobbies-list">
//         {hobbies.map((item) => (
//           <div className="hobby-item">
//             <img src={item.img} alt="foto hobi" width="100px" />
//             <h3>{item.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Hobbies;

import HobbyItem from "./HobbyItem";
function Hobbies() {
  // let {hobbies} = props
  let hobbies = [
    {
      name: "Mancing",
      img: "https://th.bing.com/th/id/R.88580235432092719f0aa0fe82b3ecd5?rik=VysCaNM3e3njKA&riu=http%3a%2f%2fwww.fantaseacharters.com%2fmedia%2fattachments%2fview%2fimg%2fdown_rigging_fishing_rod%2fjpg&ehk=7ACdvAM6O8HEhETPZk1jQyK4MhG0qXytAt9YdLyU0RU%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Lari",
      img: "https://th.bing.com/th/id/OIP.r1aTQEVGqiFHbFqvh5H-aQHaHN?pid=ImgDet&rs=1",
    },
    {
      name: "Berenang",
      img: "https://th.bing.com/th/id/OIP.4Aha2vSI3oPu8-fKB2x6EAHaE7?pid=ImgDet&rs=1",
    },
  ];

  return (
    <div id="hobbies">
      <h2>My hobbies</h2>
      <div className="hobbies-list">
        {hobbies.map((item) => (
          <HobbyItem hobbies={item} />
        ))}
      </div>
    </div>
  );
}
export default Hobbies;
