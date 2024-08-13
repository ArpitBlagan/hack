// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Textarea } from "@/components/ui/textarea";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { CircleX } from "lucide-react";
// const items = ["Frontend", "Backend", "Fullstack", "Design", "Writing"];
// const page = () => {
//   const dd = useRef(null);
//   const [tags, setTags] = useState<any[]>([]);
//   function createStars(type: any, quantity: any) {
//     for (let i = 0; i < quantity; i++) {
//       var star = document.createElement("div");
//       star.classList.add("star", `type-${type}`);
//       star.style.left = `${randomNumber(1, 99)}%`;
//       star.style.bottom = `${randomNumber(1, 99)}%`;
//       star.style.animationDuration = `${randomNumber(50, 200)}s`;
//       //@ts-ignore
//       dd?.current?.appendChild(star);
//     }
//   }
//   useEffect(() => {
//     createStars(1, 100);
//     createStars(2, 50);
//     createStars(3, 30);
//   }, []);
//   function randomNumber(min: any, max: any) {
//     return Math.floor(Math.random() * max) + min;
//   }
//   return (
//     <div className="min-h-[100dvh] flex items-center justify-center" ref={dd}>
//       <form
//         className="flex flex-col items-center border rounded-t-xl justify-center gap-3 w-full  z-10 py-10 px-4 mx-10"
//         style={{ backgroundColor: "#121212" }}
//       >
//         <Link href="/" className="text-center">
//           <h1 className="font-mono md:text-[50px] text-[30px] section-heading">
//             Finder
//           </h1>
//         </Link>
//         <div className="flex flex-col gap-3 items-start md:w-1/2 w-full">
//           <label className="text-gray-400">Title</label>
//           <Input
//             className="w-full bg-gray-800"
//             placeholder="Full stack developer"
//           />
//         </div>
//         <div className="flex flex-col gap-3 items-start md:w-1/2 w-full">
//           <label className="text-gray-400">Description</label>
//           <Textarea
//             className="w-full bg-gray-800"
//             cols={10}
//             placeholder="Looking for a skilled fullstack developer who can build and deploy the application from sctrach"
//           />
//         </div>
//         <div className="flex flex-col gap-3 items-start md:w-1/2 w-full">
//           <label className="text-gray-400">Tags</label>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 className="w-full flex items-center justify-between"
//                 variant={"outline"}
//               >
//                 <p>Select</p>
//                 <p>🔽</p>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-[300px] md:w-[400px]">
//               <DropdownMenuSeparator />
//               {items.map((ele, index) => {
//                 return (
//                   <DropdownMenuItem
//                     key={index}
//                     className="cursor-pointer"
//                     onClick={(e) => {
//                       let arr = tags;
//                       let ee = arr.find((eee) => eee == ele);
//                       if (!ee) {
//                         setTags((prev) => [...prev, ele]);
//                       }
//                     }}
//                   >
//                     {ele}
//                   </DropdownMenuItem>
//                 );
//               })}
//             </DropdownMenuContent>
//           </DropdownMenu>
//           <div className="w-full flex flex-wrap gap-3">
//             {tags.map((ele) => {
//               return (
//                 <p className="bg-gray-600 flex items-center gap-3 py-2 px-4 rounded-xl border hover:bg-gray-900">
//                   {ele}{" "}
//                   <CircleX
//                     className="cursor-pointer"
//                     onClick={(e) => {
//                       let arr = tags;
//                       if (arr.includes(ele)) {
//                         let ff = arr.filter((elee) => elee != ele);
//                         setTags(ff);
//                       }
//                     }}
//                   />
//                 </p>
//               );
//             })}
//           </div>
//         </div>
//         <div className="flex items-center justify-start md:w-1/2">
//           <Button>Submit</Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default page;
import React from "react";

export const page = () => {
  return <div>page</div>;
};
