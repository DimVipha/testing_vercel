import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { user } from "@nextui-org/react";
import { usersType } from "@/types/users";
import CardUser from "@/components/cards/UsersCard";


async function fetchUsers() {
  const user = await fetch("https://dummyjson.com/users?limit=100", {
    cache: "no-store"
  });
  const res = await user.json();
  return res.users;
}

export default async function Home() {
  let userInfo = await fetchUsers();
  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <h1 className="font-bold text-large">Hi</h1>
        <Suspense fallback={<LoadingComponent/>} >
        {userInfo?.map((u: usersType) => (
          <CardUser
            image ={u.image}
            firstName={u.firstName}
            key={u.id}
          />
        ))}
        </Suspense>
      </div>
    </>
  );
}
