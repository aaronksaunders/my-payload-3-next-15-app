import { User } from "@/payload-types";
import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function MyPage() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "users",
  });

  return (
    <div>
      <h1>My Page</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        {data.docs.map((user: User) => (
          <div key={user.id}>
            <h2>{user.email}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
